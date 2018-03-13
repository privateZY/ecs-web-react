import React, {Component, Fragment} from "react";
import ReactDom from "react-dom";
import {useStrict} from "mobx";
import {Provider, inject, observer} from 'mobx-react';
import {BrowserRouter, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import "./css";
import rootStore from "./stores";
import Login from "./pages/login";

useStrict(true);

@inject("store")
@observer
class Auth extends Component {
	
	render() {
		const {userStore} = this.props.store;

// 		console.log(userStore.time);
		if (!userStore.isCheckLogin) {
			userStore.getCurrentUser();
			return null;
		}
		
		if (userStore.isSigning) {
			return <div>登陆中</div>
		}
		
		if (!userStore.user) {
			return <Redirect to={"/login"}/>
		}
		
		return <div>
			你好, {userStore.user.name}
		</div>
	}
}

class App extends Component {
	
	render() {
		return <Fragment>
			<BrowserRouter>
				<Provider store={rootStore}>
					<Switch>
						<Route path="/login" exact component={Login}/>
						<Route path={"/"} component={Auth}/>
					</Switch>
				</Provider>
			</BrowserRouter>
			<ToastContainer autoClose={8000} position={ "top-center" }/>
		</Fragment>
	}
}

ReactDom.render(<App/>, document.getElementById("root"));