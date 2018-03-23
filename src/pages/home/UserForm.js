import React, { Component, PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { TransitionMotion, spring, presets } from "react-motion";
import { Link } from "react-router-dom";
const LoginForm = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
`;

const Avatar = styled.img.attrs({
    src: "/img/avatar.jpg"
})`
    width: 200px;
    height: 133.3px;
    box-shadow: 0px 3px 3px 1px #c1c1c1;
    border-radius: 50%;
`;

const Name = styled.h2`
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 35px;
    text-align: center;
    color: #fff;
`;

const Title = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    color: #fff;
    position: relative;
    &::after {
        content: "-码农一枚";
        position: absolute;
        right: 5px;
        font-size: 12px;
        color: #efefef;
        top: 5px;
    }
`;

const Password = styled.input.attrs({
    type: "password"
})`
    margin-top: 10px;
    outline: none;
    border: 3px solid transparent;
    height: 40px;
    width: 100%;
    padding: 0 8px;
    border-radius: 5px;
    letter-spacing: 4px;
    transition: border-color 0.3s;
    &::-webkit-input-placeholder {
        color: #999;
    }

    　　&:-moz-placeholder {
        color: #999;
    }

    　　&::-moz-placeholder {
        color: #999;
    }

    　　&:-ms-input-placeholder {
        color: #999;
    }

    &:focus {
        border: 3px solid #333;
    }
`;

const ContactList = styled.div`
    text-align: center;
    margin: 0 -10px;

    ${props =>
        props.disabled
            ? css`
                  pointer-events: none;
                  user-select: none;
              `
            : ""};
`;

const LinkStyle = css`
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin: 10px;
    cursor: pointer;
    background-color: #1890ff;
    color: #fff;
    border-radius: 50%;
    border: none;
    transition: all 0.3s;
    &:focus {
        background-color: #40a9ff;
    }

    &:hover {
        background-color: #40a9ff;
        transform: scale(1.4);
    }
`;

const ContactHref = styled.a`
    ${LinkStyle};
`;

const ContactLink = styled(Link)`
    ${LinkStyle};
`;

export default class UserForm extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false
    };

    renderComponent = ({ key, style }) => {
        const currentStyle = {
            transform: `translateY(${style.y}px)`,
            opacity: style.opacity
        };

        switch (key) {
            case "avatar":
                return <Avatar key={key} style={currentStyle} />;
            case "name":
                return (
                    <Name key={key} style={currentStyle}>
                        张&nbsp;&nbsp;&nbsp;&nbsp;庆
                    </Name>
                );
            case "title":
                return (
                    <Title key={key} style={currentStyle}>
                        前端工程师
                    </Title>
                );
            case "password":
                return <Password key={key} placeholder={"PIN码"} style={currentStyle} />;
            case "contact":
                return (
                    <ContactList key={key} style={currentStyle} disabled={!this.props.visible}>
                        <ContactLink to={"/cv"}>
                            <i className={"iconfont icon-resume"} />
                        </ContactLink>

                        <ContactHref href="mailto:zhangqing332@live.com" target="_blank">
                            <i className={"iconfont icon-email"} />
                        </ContactHref>

                        <ContactHref href="http://github.com/JennerChen" target="_blank">
                            <i className={"iconfont icon-github"} />
                        </ContactHref>

                        <ContactHref href="https://cn.linkedin.com/in/zhangqing332" target="_blank">
                            <i className={"iconfont icon-linkedin"} />
                        </ContactHref>
                    </ContactList>
                );
        }
    };

    render() {
        const { visible } = this.props;
        const spingStyle = {
            y: 0,
            opacity: 0
        };
        const defaultStyles = ["avatar", "name", "title", "password", "contact"].map(key => ({
            key,
            style: spingStyle
        }));
        return (
            <TransitionMotion
                styles={prevInterpolatedStyles =>
                    prevInterpolatedStyles.map((s, i) => ({
                        key: s.key,
                        data: s.data,
                        style:
                            i === 0
                                ? {
                                      y: spring(visible ? -80 : 0, presets.stiff),
                                      opacity: spring(visible ? 1 : 0, presets.stiff)
                                  }
                                : {
                                      y: spring(
                                          prevInterpolatedStyles[i - 1].style.y,
                                          presets.stiff
                                      ),
                                      opacity: spring(
                                          prevInterpolatedStyles[i - 1].style.opacity,
                                          presets.stiff
                                      )
                                  }
                    }))
                }
                defaultStyles={defaultStyles}>
                {interploateStyles => (
                    <LoginForm>{interploateStyles.map(d => this.renderComponent(d))}</LoginForm>
                )}
            </TransitionMotion>
        );
    }
}
