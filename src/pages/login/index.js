import React, {Component} from "react";
import PropTypes from "prop-types"
import {inject, observer} from "mobx-react";
import styled from 'styled-components';
import {Motion, spring, TransitionMotion} from 'react-motion';
import Loader from "../../components/Loader";
import {withRouter} from "react-router-dom";
import {getQueries} from "../../components/utils";

const LoginWrap = styled.div`
    width: 100%;
    max-width: 425px;
    min-height: 520px;
    background: url(/img/loginBg.jpg) no-repeat center;
    box-shadow: 0 12px 15px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
    transform: translate(-50%,-50%);
    position: fixed;
    left: 50%;
    top: 50%;
`;

const LoginSelection = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 40px 50px 40px 50px;
    background: rgba(40,57,101,.9);
`;

const SelectionLabel = styled.div`
	font-size: 22px;
    padding-bottom: 5px;
    margin: 0 15px 10px 0;
    display: inline-block;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    text-transform: uppercase;
    color: #6a6f8c;
    transition:all .5s;
    cursor:default;
    position: relative;
    &::after{
    	width: 0%;
    	content: "";
    	height: 2px;
    	background-color: #1161ee;
    	position: absolute;
    	transform: translateX(-50%);
    	left: 50%;
    	bottom:0;
    };
    
    &.active{
    	color: #fff;
    	
    	&::after{
    		transition: width .5s;
    		width: 100%;
    	}
    }
`;

const FormContainer = styled.div`
	position: relative;
`;

const LoginForm = styled.div`
    min-height: 345px;
    position: absolute;
    backface-visibility:hidden;
    width: 100%;
`;

const FormLabel = styled.span`
    color: #aaa;
    font-size: 12px;
    display: block;
    width: 100%;
    line-height: 25px;
    letter-spacing: 5px;
`;

const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 25px;
    font-size:20px;
    background-color: rgba(255,255,255,.1);
    outline:none;
    width: 100%;
    color: #fff;
    display: block;
    transition: border-color .3s;
    border: 2px solid transparent;
    &:focus{
        border: 2px solid #1161ee;
    }
    
`;

const RememberMeIcon = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    position: relative;
    display: inline-block;
    background-color: ${ props => props.rememberMe ? "#1161ee" : "rgba(255,255,255,.1)"};
    top:2px;
    transition: background-color .2s;
    &:before{
        content: '';
	    height: 2px;
	    background-color: #fff;
	    position: absolute;
	    transition: all .2s ease-in-out 0s;
	    left: 3px;
	    width: 5px;
	    bottom: 6px;
	    transform: ${ props => props.rememberMe ? "scale(1) rotate(45deg)" : "scale(0) rotate(0)"};
    }
    
    &:after{
        top: 6px;
        right: 0;
        content: '';
	    width: 10px;
	    height: 2px;
	    background: #fff;
	    position: absolute;
	    transition: all .2s ease-in-out 0s;
	    transform: ${ props => props.rememberMe ? "scale(1) rotate(-45deg)" : "scale(0) rotate(0)"};
    }
`;

const RememberMeSpan = styled.span`
	color: ${ props => props.rememberMe ? '#fff' : '#aaa' };
	font-weight:${ props => props.rememberMe ? 'bold' : 'normal' };
	transition: color .3s;
	margin-left:5px;
	letter-spacing:2px;
`;

const LoginBtn = styled.button`
	background: ${ props => props.active ? "#1161ee" : "rgba(255,255,255,.1)"};
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    width: 100%;
    color: #fff;
    display: block;
    outline:none;
    font-size:24px;
`;

@inject("store")
@observer
class LoginModal extends React.Component {
	
	static defaultProps = {
		style: {}
	};
	
	render() {
		const {
			store: {
				userStore: {
					/** @type { LoginFormStore  }*/
					loginForm
				}
			},
			style
		} = this.props;
		
		if (!loginForm) return null;
		return <LoginForm style={style}>
			<FormLabel>用户名</FormLabel>
			<FormInput
				type="text"
				value={loginForm.username}
				onChange={e => loginForm.setUsername(e.target.value)}
			/>
			
			<FormLabel>密码</FormLabel>
			<FormInput
				type="password"
				value={loginForm.password}
				onChange={e => loginForm.setPassword(e.target.value)}
			/>
			
			
			<label
				onClick={loginForm.toggleRememberMe}
				style={{
					lineHeight: "45px"
				}}
			>
				<RememberMeIcon rememberMe={loginForm.rememberMe}/>
				<RememberMeSpan rememberMe={loginForm.rememberMe}>保持登录</RememberMeSpan>
			</label>
			
			<LoginBtn
				active={loginForm.isValid}
				onClick={loginForm.login}
			>
				<span>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</span>
			</LoginBtn>
			<hr style={{height: 2, margin: "60px 0 50px 0", backgroundColor: 'rgba(255,255,255,.2)', border: 'none'}}/>
		</LoginForm>
	}
}

@inject("store")
@observer
class SignupModal extends React.Component {
	
	static defaultProps = {
		style: {}
	};
	
	render() {
		
		const {
			store: {
				userStore: {
					signUpForm
				}
			},
			style
		} = this.props;
		
		return <LoginForm style={style}>
			<FormLabel>用户名</FormLabel>
			<FormInput type="text" value={signUpForm.username} onChange={e => signUpForm.setUserName(e.target.value)}/>
			
			<FormLabel>密码</FormLabel>
			<FormInput
				type="password"
				value={signUpForm.password}
				onChange={e => signUpForm.setPassword(e.target.value)}
			/>
			
			<FormLabel>重复密码</FormLabel>
			<FormInput
				type="password"
				style={{marginBottom: 25}}
				value={signUpForm.repeatPassword}
				onChange={e => signUpForm.setRepeatPassword(e.target.value)}
			/>
			
			<LoginBtn
				active={signUpForm.isFormValid}
				onClick={signUpForm.signup}
			>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</LoginBtn>
			<hr style={{height: 2, margin: "60px 0 50px 0", backgroundColor: 'rgba(255,255,255,.2)', border: 'none'}}/>
		</LoginForm>
	}
}

@inject("store")
@withRouter
@observer
export default class Login extends React.Component {
	
	getRedirectUrl() {
		const {
			location: {
				search
			},
		} = this.props;
		
		return Object.assign({}, {
			redirectUrl: "/"
		}, getQueries(search)).redirectUrl;
	}
	
	componentDidMount() {
		const {userStore} = this.props.store;
		
		userStore.loginUser(this.getRedirectUrl());
		userStore.signUpUser(this.getRedirectUrl());
		
		document.addEventListener("keydown", this.submitForm)
	}
	
	componentWillUnmount() {
		document.removeEventListener("keydown", this.submitForm);
	}
	
	submitForm = (e) => {
		if (e.keyCode === 13) {
			const {userStore: {signUpForm, loginForm, viewFormType}} = this.props.store;
			switch (viewFormType) {
				case "login":
					if (loginForm.isValid) {
						loginForm.login();
					}
					break;
				case "signup":
					if (signUpForm.isFormValid) {
						signUpForm.signup();
					}
			}
		}
	};
	
	formLeave() {
		return {
			rotateY: spring(90),
			opacity: spring(0)
		}
	}
	
	formEnter() {
		return {
			rotateY: -90,
			opacity: 0
		}
	}
	
	loginForm = () => {
		const {
			store: {
				userStore
			}
		} = this.props;
		userStore.setViewFormType("login")
	};
	
	signUpForm = () => {
		const {
			store: {
				userStore
			}
		} = this.props;
		userStore.setViewFormType("signup")
	};
	
	render() {
		const {userStore} = this.props.store;
		
		let currentForm = [];
		
		switch (userStore.viewFormType) {
			case "login":
				currentForm = [{
					key: "login",
					style: {
						rotateY: spring(0),
						opacity: spring(1)
					}
				}];
				break;
			case "signup":
				currentForm = [{
					key: "signup",
					style: {
						rotateY: spring(0),
						opacity: spring(1)
					}
				}]
		}
		
		return <LoginWrap>
			<LoginSelection>
				<SelectionLabel
					className={userStore.viewFormType === "login" ? 'active' : ''}
					onClick={this.loginForm}
				>登&nbsp;&nbsp;&nbsp;&nbsp;录</SelectionLabel>
				<SelectionLabel
					className={userStore.viewFormType === "signup" ? 'active' : ''}
					onClick={this.signUpForm}
				>注&nbsp;&nbsp;&nbsp;&nbsp;册</SelectionLabel>
				
				<TransitionMotion
					willEnter={this.formEnter}
					willLeave={this.formLeave}
					styles={currentForm}
				>
					{(interpolatedStyles) => <FormContainer>
						{interpolatedStyles.map(({style, key}) => {
							if (key === "login") {
								return <LoginModal key={"login"} style={{
									transform: `rotateY(${style.rotateY}deg)`,
									opacity: style.opacity
								}}/>
							} else {
								return <SignupModal key={"signup"} style={{
									transform: `rotateY(${style.rotateY}deg)`,
									opacity: style.opacity
								}}/>
							}
						})}
					</FormContainer>}
				</TransitionMotion>
			</LoginSelection>
		</LoginWrap>
	}
}