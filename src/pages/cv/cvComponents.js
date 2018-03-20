import React from "react";
import styled from "styled-components";
import { spring, Motion, presets } from "react-motion";

export const CvWrap = styled.div`
    padding-top: 300px;
    position: relative;
    margin: 0 auto;
    margin-top: -65px;
    max-width: 1100px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    height: 130px;
    position: relative;
    z-index: 150;
    user-select: none;
    box-shadow: 0 4px 4px 1px #c1c1c1;
`;

export const Name = styled.h1`
    font-size: 42px;
    font-weight: 100;
    line-height: 44px;
    color: #a7a7a7;
`;

export const Job = styled.h2`
    margin: 15px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    color: #a7a7a7;
`;

export const Icon = styled.i.attrs({
    className: props => `iconfont ${props.className}`
})``;

export const ContactBtn = styled.a`
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin: 10px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: #1890ff;
    color: #fff;
    border-radius: 50%;
    border: none;

    &:focus,
    &:hover {
        background-color: #40a9ff;
    }
`;
export const contactIconStyle = {
    width: 35,
    height: 35,
    lineHeight: "30px",
    fontSize: 14,
    margin: 10,
    boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.2)"
};

export const InfoItemList = styled.div`
    float: left;
    width: 40%;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const InfoItemWrap = styled.div`
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    font-size: 14px;
    color: #363636;
    position: relative;
    & .infoText {
        display: inline-block;
        width: 100%;
        padding-left: 80px;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 50px;
    }

    @media (max-width: 900px) {
        & .infoText {
            padding-left: 120px;
        }
    }

    @media (max-width: 450px) {
        & .infoText {
            padding-left: 80px;
        }
    }
`;
export const SelectionTitle = styled.div`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 30px;
    color: #bdbdbd;
`;
export const SelfIntro = styled.div`
    width: 60%;
    float: left;
    padding-left: 15px;

    @media (max-width: 900px) {
        margin-top: 10px;
        width: 100%;
        padding-left: 0;
    }

    & p {
        font-size: 12px;
        line-height: 22px;
        letter-spacing: ${props => (props.lang === "zh" ? 1 : 0)}px;
        margin-bottom: 10px;
    }
`;

export const SkillSelectionProfession = styled.div`
    width: 50%;
    padding-right: 20px;
    float: left;
    position: relative;
    @media (max-width: 900px) {
        width: 100%;
        padding-right: 0;
    }
`;

export const SkillSelectionPersonal = styled.div`
    width: 50%;
    padding-left: 20px;
    float: left;
    position: relative;
    @media (max-width: 900px) {
        width: 100%;
        padding-left: 0;
        margin-top: 50px;
    }
`;

export const SkillTypeIcon = styled.div`
    position: absolute;
    text-align: center;
    top: -25px;
    width: 100%;
    z-index: 10;
    left: 0;
    & h3 {
        font-size: 16px;
        position: relative;
        top: 10px;
        font-size: 20px;
    }
    & i {
        padding: 10px;
        font-size: 28px;
        border-radius: 50%;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: #108ee9;
        color: #fff;
    }
`;
export const HighlightAbility = styled.span`
    font-weight: bold;
    padding: 2px 5px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: rgba(238, 238, 238, 0.6);
    border-bottom: 1px solid #108ee9;
`;
export const SkillItem = styled.div`
    padding: 10px 0;
`;
export const SkillName = styled.span`
    font-size: 18px;
    color: #333;
    position: relative;
    bottom: -4px;
    margin-right: 5px;
`;
export const SkillScore = styled.span`
    text-align: right;
    font-size: 14px;
    position: relative;
    bottom: -2px;

    & span {
        margin: 0 2px;
    }
`;
export const TimeLineContainer = styled.div`
    position: relative;
    min-height: 100px;
    padding-top: 60px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        transform: translate(-1px, 0);
        background-color: #108ee9;
    }

    @media (max-width: 900px) {
        &::before {
            left: 4%;
        }
    }
`;

export const TimeLineIcon = styled(Icon)`
    position: absolute;
    top: -25px;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px;
    font-size: 28px;
    border-radius: 50%;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #108ee9;
    color: #fff;
    width: 64px;
    text-align: center;
    height: 64px;

    @media (max-width: 900px) {
        left: 4%;
    }
`;

export const TimeLineSelection = styled.div`
    width: 46%;
    position: relative;
    margin-bottom: 25px;
    ${props => (props.floatToRight ? "margin-left:54%" : "")};
    &:before {
        position: absolute;
        content: "";
        width: 8.5%;
        height: 2px;
        background-color: #108ee9;
        ${props => (props.floatToRight ? "left" : "right")}:-8.5%;
        top: 20px;
    }

    @media (max-width: 900px) {
        width: 92%;
        left: 8%;
        margin-left: 0;
        &:before {
            position: absolute;
            content: "";
            width: 4.2%;
            background-color: #108ee9;
            height: 2px;
            left: -4.2%;
            top: 20px;
        }
    }
`;

export const TimeLineSelectionName = styled.h2`
    margin-bottom: 8px;
    padding-right: 80px;
`;

export const TimeLineSelectionSubTitle = styled.span`
    background-color: #efefef;
    padding: 4px;
    margin-bottom: 5px;
    display: inline-block;
    font-size: 12px;
`;

export const TimeLineSelectionDescription = styled.p`
    line-height: 22px;
    font-size: 12px;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
`;

export const ProjectIntroduce = styled.div`
    width: 33.333%;
    margin-bottom: 20px;
    padding: 0 5px;
    @media (max-width: 900px) {
        width: 50%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }

    @media print {
        display: block !important;
        transform: scale(1) !important;
    }
`;

export const ProjectName = styled.h2`
    font-weight: normal;
    margin-bottom: 8px;
`;
export const ProjectType = styled.span`
    background-color: #efefef;
    padding: 4px;
    margin-bottom: 5px;
    display: inline-block;
`;

export const ProjectContent = styled.p`
    line-height: 22px;
    font-size: 12px;
`;

export class ProjectBlock extends React.Component {
    static defaultProps = {
        show: true
    };
    render() {
        const { show, children } = this.props;
        return (
            <Motion
                defaultStyle={{ scale: 1 }}
                style={{ scale: spring(show ? 1 : 0, presets.stiff) }}>
                {({ scale }) => (
                    <ProjectIntroduce
                        style={{
                            transform: `scale(${scale})`,
                            display: scale <= 0.2 ? "none" : "block"
                        }}>
                        {children}
                    </ProjectIntroduce>
                )}
            </Motion>
        );
    }
}
