import {action, computed, observable} from "mobx";
import SignUpFormStore from "./SignUpFormStore";
import LoginFormStore from "./LoginFormStore";
import {onlyOneReq} from "../../components/decorators";

export class UserStore {
	
	@observable user;
	
	@observable isSigning = false;
	@observable isCheckLogin = false;
	
	@observable signUpForm = null;
	@observable loginForm = null;
	@observable viewFormType = "login";
	
	constructor(root) {
		this.root = root;
	}
	
	@action.bound
	setViewFormType(type){
		this.viewFormType = type;
	}
	
	@action.bound
	loginUser(redirectUrl = "/") {
		this.loginForm = new LoginFormStore(this.root, redirectUrl);
	}
	
	@action.bound
	signUpUser(redirectUrl = "/") {
		this.signUpForm = new SignUpFormStore(this.root,redirectUrl);
	}
	
	@action.bound
	clearSignUpForm() {
		this.signUpForm = null;
	}
	
	@action.bound
	@onlyOneReq("isSigning")
	getCurrentUser() {
		this.isCheckLogin = true;
		
		return this.root.req
			.get(this.root.getFullHost("/user/current"))
			.then(action("setUser", (res) => {
				this.user = res.data.user;
			}))
			.catch(e => {
				this.user = null;
			})
	}
}