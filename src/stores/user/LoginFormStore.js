import {action, computed, observable} from "mobx";

export default class LoginFormStore {
	
	@observable username = "";
	
	@observable password = "";
	
	@observable rememberMe = true;
	
	@observable redirectUrl = "/";
	
	constructor(root, redirectUrl) {
		this.root = root;
		this.redirectUrl = redirectUrl;
	}
	
	@computed
	get isValid() {
		return true;
	}
	
	@action.bound
	toggleRememberMe() {
		this.rememberMe = !this.rememberMe;
	}
	
	@action.bound
	setUsername(name) {
		this.username = name;
	}
	
	@action.bound
	setPassword(password) {
		this.password = password;
	}
	
	@action.bound
	login() {
		return this.root.req.post(this.root.getFullHost("/user/login"), {
			username: this.username.trim(),
			password: this.password.trim()
		}).then(res => {
			window.location = this.redirectUrl;
		}).catch(action("error", () => {
			this.username = "";
			this.password = "";
		}))
	}
}