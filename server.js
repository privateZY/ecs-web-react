const path = require("path");
const express = require("express");
const proxy = require("http-proxy-middleware");
const webpack = require("webpack");
const ProgressPlugin = require("webpack/lib/ProgressPlugin");

const isProductVersion = process.argv[2] === "dist";


const webpackConfig = isProductVersion
	? require("./webpack.config")
	: require("./webpack.dev.config");


const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

const webpackCompiler = webpack(webpackConfig);

webpackCompiler.apply(
	new ProgressPlugin(function(percentage, msg, current, active, modulepath) {
		if (process.stdout.isTTY && percentage < 1) {
			process.stdout.cursorTo(0);
			modulepath = modulepath ? " …" + modulepath.substr(modulepath.length - 30) : "";
			current = current ? " " + current : "";
			active = active ? " " + active : "";
			process.stdout.write(
				(percentage * 100).toFixed(0) + "% " + msg + current + active + modulepath + " "
			);
			process.stdout.clearLine(1);
		} else if (percentage === 1) {
			process.stdout.write("\n");
			console.log("webpack complete at:" + new Date());
			if (!app.inited) {
				app.inited = true;
				app.listen(80, function() {
					console.log("server start listen on port: 80");
				});
			}
		}
	})
);

function compileDone(err, stats) {
	if (err) {
		console.error(err.stack || err);
		if (err.details) {
			console.error(err.details);
		}
		return;
	}
	
	const info = stats.toJson();
	
	if (stats.hasErrors()) {
		console.error(info.errors);
	}
	
	if (stats.hasWarnings()) {
		console.warn(info.warnings);
	}
	
	process.stdout.write(
		stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + "\n\n"
	);
}
if (isProductVersion) {
	webpackCompiler.run(compileDone);
} else {
	webpackCompiler.watch(
		{
			watch: true,
			ignored: /node_modules/
		},
		compileDone
	);
}
