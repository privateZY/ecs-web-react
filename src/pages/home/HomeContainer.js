import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import moment from "moment";
import UserForm from "./UserForm";

const FadeOut = keyframes`
	from{
		transform: translateY(0);
		opacity: 1;
	}
	
	to{
		transform: translateY(100px);
		opacity: 0;
	}
`;

const FadeIn = keyframes`
	from{
		transform: translateY(100px);
		opacity: 0;
	}
	
	to{
		transform: translateY(0);
		opacity: 1;
	}
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Bg = styled.div.attrs({
    image: props => props.image
})`
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => (props.image ? props.image : "/img/homeBgPreview.jpg")});
    filter: grayscale(${props => (props.image ? 0 : 1)});
    transition: opacity, filter 1s, 0.5s;
    overflow: hidden;
    ${props => (props.fadeOut ? "filter: blur(5px)" : "")};
`;

const Logo = styled.img.attrs({
    src: "/img/logo.png"
})`
    position: absolute;
    width: 144px;
    height: 50px;
    left: 35px;
    z-index: 10;
    top: 20px;
`;

const CurrentTimeContainer = styled.div`
    position: absolute;
    left: 30px;
    bottom: 50px;
    color: #fff;
    z-index: 10;
`;

const TimeSpan = styled.div`
    font-size: 30px;
    color: #fff;
    letter-spacing: 4px;
    animation: ${props => (props.fadeIn ? FadeIn : FadeOut)} 0.5s;
    animation-fill-mode: forwards;
`;

const LockBtn = styled.button`
    border-radius: 50%;
    border: 2px solid transparent;

    width: 50px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    left: 50%;
    bottom: 25px;
    transform: translate(-50%, -50%);
    outline: none;
    transition: all 0.3s;
    &:hover {
        background-color: #333;
        color: #efefef;
        border: 2px solid #333;
    }
`;
export default class extends Component {
    constructor(props) {
        super(props);
        const now = moment();
        this.state = {
            currentTime: now.format("hh:mm:ss"),
            currentWeek: this.formatDayOfWeek(now.format("e")),
            loginForm: false,
            bgImg: ""
        };

        this.img = new Image();

        this.img.onload = () => {
            this.setState({
                bgImg: "/img/homeBg.jpg"
            });
        };

        this.img.src = "/img/homeBg.jpg";
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
        this.timer = setInterval(this.updateCurrentTime, 1000);
    }

    componentWillUnmount() {
        document.body.style.overflow = "";
        clearInterval(this.timer);
    }

    updateCurrentTime = () => {
        const now = moment();

        this.setState({
            currentTime: now.format("hh:mm:ss"),
            currentWeek: this.formatDayOfWeek(now.format("e"))
        });
    };

    formatDayOfWeek(num) {
        switch (num) {
            case "1":
                return "星期一";
            case "2":
                return "星期二";
            case "3":
                return "星期三";
            case "4":
                return "星期四";
            case "5":
                return "星期五";
            case "6":
                return "星期六";
            case "0":
                return "周末";
        }
    }

    showLoginForm = () => {
        this.setState({
            loginForm: true
        });
    };

    hideLoginForm = () => {
        this.setState({
            loginForm: false
        });
    };

    render() {
        const { currentTime, currentWeek, loginForm, bgImg } = this.state;
        return (
            <Fragment>
                <Container onClick={this.showLoginForm}>
                    <Bg fadeOut={loginForm} image={bgImg}>
                        <Logo />
                        <CurrentTimeContainer>
                            <TimeSpan style={{ fontSize: 40 }} fadeIn={!loginForm}>
                                {currentTime}
                            </TimeSpan>

                            <TimeSpan fadeIn={!loginForm}>{currentWeek}</TimeSpan>
                        </CurrentTimeContainer>
                    </Bg>
                    <UserForm visible={loginForm} />
                </Container>
                {loginForm ? (
                    <LockBtn onClick={this.hideLoginForm}>
                        <i className={"iconfont icon-lock"} style={{ fontSize: 30 }} />
                    </LockBtn>
                ) : null}
            </Fragment>
        );
    }
}
