import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { configure } from "mobx";
import { Provider, inject, observer } from "mobx-react";
import styled from "styled-components";
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./css";
import rootStore from "./stores";
import Login from "./pages/login";
import CV from "./pages/cv";
import Home from "./pages/home";
configure({
  enforceActions: true
});

@inject("store")
@observer
class Auth extends Component {
  addFile = e => {
    this.props.store.fileUploader.uploadFile(Array.from(e.target.files)[0]);

    console.log(e.target.files);
  };

  render() {
    return <input type={"file"} onChange={this.addFile} />;
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Provider store={rootStore}>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path={"/cv"} component={CV} />
              {/*<Route path={"/file"} component={Auth}/>*/}
              {/*<Route path={"/t"} component={D}/>*/}
              <Route path={"/"} component={Home} exact />
              <Redirect to={"/"} />
            </Switch>
          </Provider>
        </BrowserRouter>
        <ToastContainer autoClose={8000} position={"top-center"} />
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
