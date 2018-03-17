import styled, {injectGlobal} from "styled-components";
import "nprogress/nprogress.css";
import 'react-tippy/dist/tippy.css'

injectGlobal`
	*{
		box-sizing: border-box;
		font:14px/1.6 PingFangSC-light, "Microsoft YaHei", "SIMSUN";
	}
	
	html, body, #root{
		width: 100%;
		min-height: 100%;
		height: 100%;
	}
	
	.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
`;
