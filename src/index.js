import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { useStrict } from "mobx";
import { Provider, inject, observer } from "mobx-react";
import styled from "styled-components";
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./css";
import rootStore from "./stores";
import Login from "./pages/login";
import CV from "./pages/cv";
import Home from "./pages/home";

useStrict(true);

@inject("store")
@observer
class Auth extends Component {
    addFile = e => {
        this.props.store.fileUploader.uploadFile(Array.from(e.target.files)[0]);

        console.log(e.target.files);
    };

    render() {
        return <input type={"file"} onChange={this.addFile} />;
        //         return <div>{ rootStore.count }</div>
        //         const { userStore } = this.props.store;
        //
        //         // 		console.log(userStore.time);
        //         if (!userStore.isCheckLogin) {
        //             userStore.getCurrentUser();
        //             return null;
        //         }
        //
        //         if (userStore.isSigning) {
        //             return <div>登陆中</div>;
        //         }
        //
        //         if (!userStore.user) {
        //             return <Redirect to={"/login"} />;
        //         }
        //
        //         return <div>你好, {userStore.user.name}</div>;
    }
}

const Abs = styled.div`
    position: absolute;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    border: 4px solid #333;
    box-sizing: border-box;
`;

const Win = styled.div`
    background-color: bisque;
    position: absolute;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;

    &:hover {
        background-color: green;
    }
`;

const Text = styled.span`
    background-color: #efefef;
    padding: 2px 4px;
    font-size: 12px;
    position: absolute;

    width: ${props => props.width}px;
    height: ${props => props.height}px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`;
class D extends Component {
    render() {
        return (
            <Fragment>
                <Abs width={373} height={316}>
                    <Win width={373} height={15} left={0}>
                        <Text top={20} left={100}>
                            3.73 m * 2 片拉
                        </Text>
                    </Win>
                    <Text top={50} left={170}>
                        7.5 m{" "}
                    </Text>
                </Abs>
                <Abs width={577} height={316} left={373}>
                    <Win width={577} height={15} left={0}>
                        <Text top={20} left={250}>
                            5.77 m * 2 片拉
                        </Text>
                    </Win>
                    <Text top={60} left={280}>
                        11.5 m{" "}
                    </Text>
                </Abs>

                <Abs width={577} height={316} left={577 + 373}>
                    <Win width={577} height={15} left={0}>
                        <Text top={20} left={250}>
                            5.77 m * 2 片拉
                        </Text>
                    </Win>
                    <Text top={60} left={280}>
                        11.5 m{" "}
                    </Text>
                </Abs>

                <Abs width={577} height={316} left={577 * 2 + 373}>
                    <Win width={577} height={15} left={0}>
                        <Text top={20} left={250}>
                            5.77 m * 2 片拉
                        </Text>
                    </Win>
                    <Text top={60} left={280}>
                        11.5 m{" "}
                    </Text>
                </Abs>

                <Abs width={575} height={316 + 546} left={577 * 3 + 373}>
                    <Win width={575} height={15} left={0}>
                        <Text top={20} left={250}>
                            5.75 m * 2 片拉
                        </Text>

                        <Text top={50} left={250}>
                            {5.75 * 2} m{" "}
                        </Text>
                    </Win>
                    <Win
                        width={15}
                        height={316}
                        left={560}
                        top={0}
                        style={{ borderBottom: "2px solid #333" }}>
                        <Text top={150} left={-130}>
                            3.16 m * 2 片拉
                        </Text>

                        <Text top={180} left={-130}>
                            {6.3} m{" "}
                        </Text>
                    </Win>
                    <Win width={15} height={546} left={560} top={316}>
                        <Text top={250} left={-130}>
                            5.46 m * 2 片拉
                        </Text>

                        <Text top={280} left={-130}>
                            {10.9}m
                        </Text>
                    </Win>
                    <Win width={572} height={15} left={0} top={316 + 540}>
                        <Text top={-40} left={250}>
                            5.72 m * 2 片拉
                        </Text>

                        <Text top={-70} left={250}>
                            {11.4}m
                        </Text>
                    </Win>
                    5
                </Abs>

                <Abs
                    width={373 + 577 * 3}
                    height={200}
                    style={{ backgroundColor: "gray" }}
                    top={316}>
                    走廊
                </Abs>

                <Abs width={463} height={259} top={200 + 316}>
                    6
                    <Win width={15} height={106} style={{ bottom: 0 }} left={0}>
                        <Text top={-20} left={25} width={150}>
                            1.06 m * 2 做1片拉
                        </Text>

                        <Text top={10} left={25}>
                            {2.1}m
                        </Text>
                    </Win>
                    <Win width={463} height={15} style={{ bottom: 0 }} left={0}>
                        <Text top={-40} left={180} width={150}>
                            4.63 m * 2 片拉
                        </Text>

                        <Text top={-70} left={180}>
                            {9.3} m
                        </Text>
                    </Win>
                </Abs>

                <Abs width={105 + 218 + 236} height={259} left={463} top={200 + 316}>
                    7
                    <Win
                        width={105}
                        height={15}
                        style={{ bottom: 0, borderRight: "2px solid #333" }}
                        left={0}>
                        <Text top={-40} left={-10} width={130} style={{ transform: "scale(.8)" }}>
                            1.05 m * 2 做1片拉
                        </Text>

                        <Text top={-65} left={4}>
                            {2.1} m
                        </Text>
                    </Win>
                    <Win
                        width={218}
                        height={15}
                        style={{ bottom: 0, borderRight: "2px solid #333" }}
                        left={105}>
                        <Text top={-40} left={60} width={130}>
                            2.18 m * 2 片拉
                        </Text>

                        <Text top={-70} left={60}>
                            {4.3} m
                        </Text>
                    </Win>
                    <Win width={236} height={15} style={{ bottom: 0 }} left={105 + 218}>
                        <Text top={-40} left={70} width={130}>
                            2.36 m * 2 片拉
                        </Text>

                        <Text top={-70} left={70}>
                            {4.7}m
                        </Text>
                    </Win>
                </Abs>

                <Abs width={455 + 577} height={259} left={463 + 105 + 218 + 236} top={200 + 316}>
                    8
                    <Win
                        width={455}
                        height={15}
                        style={{ bottom: 0, borderRight: "2px solid #333" }}
                        left={0}>
                        <Text top={-40} left={180} width={130}>
                            4.55 m * 2 片拉
                        </Text>

                        <Text top={-70} left={180}>
                            {9.1} m
                        </Text>
                    </Win>
                    <Win
                        width={577}
                        height={15}
                        style={{ bottom: 0, borderRight: "2px solid #333" }}
                        left={455}>
                        <Text top={-40} left={240} width={130}>
                            5.77 m * 2 片拉
                        </Text>

                        <Text top={-70} left={240}>
                            {11.5}m
                        </Text>
                    </Win>
                </Abs>

                <div style={{ position: "absolute", top: 800 }}>
                    合计:<br />
                    7.5 + 11.5 + 11.5 + 11.5 + 11.5 + 6.3 + 10.9 + 11.4 + 11.5 + 9.1 + 4.7 + 4.3 +
                    2.1 + 9.3 + 2.1 =
                    {7.5 +
                        11.5 +
                        11.5 +
                        11.5 +
                        11.5 +
                        6.3 +
                        10.9 +
                        11.4 +
                        11.5 +
                        9.1 +
                        4.7 +
                        4.3 +
                        2.1 +
                        9.3 +
                        2.1}{" "}
                    * 95(单价) =
                    <strong>
                        {Math.round(
                            7.5 +
                                11.5 +
                                11.5 +
                                11.5 +
                                11.5 +
                                6.3 +
                                10.9 +
                                11.4 +
                                11.5 +
                                9.1 +
                                4.7 +
                                4.3 +
                                2.1 +
                                9.3 +
                                2.1
                        ) * 95}
                    </strong>
                    元
                </div>
            </Fragment>
        );
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
