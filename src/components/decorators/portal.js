import { decorate } from "./util";
import React, { Component, createElement } from "react";
import ReactDom, { unstable_renderSubtreeIntoContainer, unmountComponentAtNode } from "react-dom";

function getDecorator(withArgs) {
    return (target, key, descriptor) => {
        return class Portal extends Component {
            componentDidMount() {
                this.portal = document.createElement("div");
                document.body.appendChild(this.portal);
                this.renderPortal(this.props);
            }

            componentWillUnmount() {
                unmountComponentAtNode(this.portal);
                this.portal.remove();
            }

            componentWillReceiveProps(nextProps) {
                this.renderPortal(nextProps);
            }

            renderPortal(props) {
                unstable_renderSubtreeIntoContainer(
                    this,
                    createElement(target, props),
                    this.portal
                );
            }

            render() {
                return null;
            }
        };
    };
}

export const portal = function() {
    const isReactElement = typeof arguments[0] === "function";
    const decorator = getDecorator(isReactElement);
    return decorate(!isReactElement, decorator, arguments);
};
