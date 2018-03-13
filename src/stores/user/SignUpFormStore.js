import {action, computed, observable} from "mobx";

export default class SignUpFormStore {
	
	@observable username = "";
	
	@observable password = "";
	
	@observable repeatPassword = "";
	
	@observable redirectUrl = "/";
	
	constructor(root, url) {
		this.root = root;
		this.redirectUrl = url;
	}
	
	@computed
	get isFormValid() {
		return this.username.trim().length >= 3 && this.password === this.repeatPassword && this.password.trim() !== "";
	}
	
	@action.bound
	setUserName(username) {
		this.username = username;
	}
	
	@action.bound
	setPassword(pwd) {
		this.password = pwd;
	}
	
	@action.bound
	setRepeatPassword(pwd) {
		this.repeatPassword = pwd;
	}
	
	
	
	@action.bound
	signup() {
		return this.root.req.post(this.root.getFullHost("/user"), {
			username: this.username.trim(),
			password: this.password.trim(),
			passwordRepeat: this.repeatPassword.trim()
		}).then(action("done", res => {
			window.location = this.redirectUrl;
		}))
		
	}
}