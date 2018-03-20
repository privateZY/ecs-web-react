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
    background-image: url("/img/homeBg.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: opacity 1s;

    ${props => (props.fadeOut ? "opacity: .6" : "")};
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

export default class extends Component {
    constructor(props) {
        super(props);
        const now = moment();
        this.state = {
            currentTime: now.format("hh:mm:ss"),
            currentWeek: this.formatDayOfWeek(now.format("e")),
            loginForm: false
        };
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
            case "7":
                return "周末";
        }
    }

    showLoginForm = () => {
        if (this.resetTimer) {
            clearInterval(this.resetTimer);
        }

        this.setState({
            loginForm: true
        });

        this.resetTimer = setInterval(this.resetLoginForm, 10000);
    };

    resetLoginForm = () => {
        this.setState({
            loginForm: false
        });

        clearInterval(this.resetTimer);
    };

    render() {
        const { currentTime, currentWeek, loginForm } = this.state;
        return (
            <Fragment>
                <Container fadeOut={loginForm} onClick={this.showLoginForm}>
                    <Logo />
                    <CurrentTimeContainer>
                        <TimeSpan style={{ fontSize: 40 }} fadeIn={!loginForm}>
                            {currentTime}
                        </TimeSpan>

                        <TimeSpan fadeIn={!loginForm}>{currentWeek}</TimeSpan>
                    </CurrentTimeContainer>
                </Container>

                <UserForm visible={loginForm} />
            </Fragment>
        );
    }
}
