import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import { Tooltip } from "react-tippy";
import {
    Avatar,
    ContactBtn,
    Icon,
    contactIconStyle,
    CvWrap,
    HighlightAbility,
    InfoItemList,
    InfoItemWrap,
    Job,
    Name,
    ProjectBlock,
    ProjectContent,
    ProjectName,
    ProjectType,
    SelectionTitle,
    SelfIntro,
    SkillItem,
    SkillName,
    SkillScore,
    SkillSelectionPersonal,
    SkillSelectionProfession,
    SkillTypeIcon,
    FlexContainer,
    TimeLineContainer,
    TimeLineIcon,
    TimeLineSelection,
    TimeLineSelectionDescription,
    TimeLineSelectionName,
    TimeLineSelectionSubTitle
} from "./cvComponents";

const Card = styled.div`
    padding: 20px;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    border: none;
    transition: all 0.3s;
    &:hover {
        box-shadow: 0px 0px 4px 2px rgba(230, 230, 230, 0.6);
    }
`;

const Tag = styled.span`
    background-color: ${props => (props.color ? props.color : "#40a9ff")};
    color: #fff;
    padding: 2px 6px;
    border-radius: 5px;
    font-size: 12px;
`;

const TooltipDefaultOptions = {
    arrow: true,
    position: "bottom",
    trigger: "mouseenter",
    distance: 20,
    delay: 200,
    hideDelay: 200
};

const Progress = styled.div.attrs({})`
    width: 100%;
    height: 10px;
    background-color: #efefef;
    border-radius: 5px;
    margin-top: 10px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        width: ${props => (props.percent ? props.percent : 0)}%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        border-radius: 5px;
        background-color: #4caf50;
        transition: width 0.3s;
    }
`;

@inject("store")
@observer
export default class CVZH extends Component {
    render() {
        return (
            <CvWrap>
                <div style={{ textAlign: "center" }}>
                    <Avatar src="/img/cv-photo.jpg" draggable={false} />
                    <Name>ZHANG QING</Name>
                    <Job>Front-end Developer</Job>

                    <div>
                        <Tooltip {...TooltipDefaultOptions} title="linkedin">
                            <ContactBtn
                                href="https://cn.linkedin.com/in/zhangqing332"
                                target="_blank">
                                <Icon className={"icon-linkedin"} />
                            </ContactBtn>
                        </Tooltip>

                        <Tooltip {...TooltipDefaultOptions} title="email">
                            <ContactBtn href="mailto:zhangqing332@live.com" target="_blank">
                                <Icon className={"icon-email"} />
                            </ContactBtn>
                        </Tooltip>

                        <Tooltip {...TooltipDefaultOptions} title="Github">
                            <ContactBtn href="http://github.com/JennerChen" target="_blank">
                                <Icon className={"icon-github"} />
                            </ContactBtn>
                        </Tooltip>
                    </div>
                </div>
                <SelectionTitle>Introduce</SelectionTitle>
                <Card style={{ width: "100%" }}>
                    <div className="clearfix">
                        <InfoItemList>
                            <InfoItemWrap>
                                <Tag color="#108ee9">birth:</Tag>
                                <span className="infoText">1991-09-07</span>
                            </InfoItemWrap>

                            <InfoItemWrap>
                                <Tag color="#108ee9">Job:</Tag>
                                <span className="infoText">Senior Front-end Developer</span>
                            </InfoItemWrap>

                            <InfoItemWrap>
                                <Tag color="#108ee9">Address:</Tag>
                                <span className="infoText">JiangSu/Suzhou</span>
                            </InfoItemWrap>

                            <InfoItemWrap>
                                <Tag color="#108ee9">National:</Tag>
                                <span className="infoText">China</span>
                            </InfoItemWrap>

                            <InfoItemWrap>
                                <Tag color="#108ee9">Tel:</Tag>
                                <span className="infoText">181 1252 5542</span>
                            </InfoItemWrap>

                            <InfoItemWrap>
                                <Tag color="#108ee9">
                                    <Icon
                                        className={"icon-email"}
                                        style={{
                                            marginRight: 4,
                                            fontSize: 14
                                        }}
                                    />
                                    :
                                </Tag>
                                <span className="infoText">zhangqing332@live.com</span>
                            </InfoItemWrap>

                            <InfoItemWrap>
                                <Tag color="#108ee9">
                                    <Icon
                                        className="icon-linkedin"
                                        style={{
                                            marginRight: 4,
                                            fontSize: 14
                                        }}
                                    />:
                                </Tag>
                                <span className="infoText">
                                    https://cn.linkedin.com/in/zhangqing332
                                </span>
                            </InfoItemWrap>

                            <InfoItemWrap>
                                <Tag color="#108ee9">
                                    <Icon
                                        className="icon-github"
                                        style={{
                                            marginRight: 4,
                                            fontSize: 14
                                        }}
                                    />:
                                </Tag>
                                <span className="infoText">http://github.com/JennerChen</span>
                            </InfoItemWrap>
                        </InfoItemList>
                        <SelfIntro lang="zh">
                            <p>
                                Front-end engineer, 3 years front-end work experience, Mainly
                                engaged in the development of enterprise-level web pages, capable of
                                independent architecture and development of small and medium-sized
                                high-quality Highly maintainable web front-end project.
                            </p>
                            <p>
                                JavaScript fan, proficient in native js development, usually likes
                                to study the cutting-edge technology of the front end, familiar with
                                the use of react and related construction tools, the pursuit of the
                                code of Dry philosophy, advocating agile development, and strive to
                                complete the task in the shortest time and high quality, continuous
                                optimization Existing technology stack, strive for optimal solution
                            </p>
                            <p>
                                Good at analyzing the strengths and weaknesses of existing projects
                                and solving problems in front-end development. Give a reasonable and
                                feasible solution to continuously optimize the project.
                            </p>
                            <p>
                                Study or used <HighlightAbility>jquery</HighlightAbility> plugins,
                                data visualization <HighlightAbility>d3.js</HighlightAbility> chart
                                library, and <HighlightAbility>react</HighlightAbility>Related
                                community library. Ability to develop these three major tech stack
                                based on business requirement.<br />
                                Skilled in div+css responsive layout <br />
                                Skilled in gulp, browserify,{" "}
                                <HighlightAbility>webpack</HighlightAbility> front-end build tools。{" "}
                                <br />
                                Proficient in native js development, use a large number of
                                javascript advanced syntax in normal code base{" "}
                                <HighlightAbility>es6</HighlightAbility>,{" "}
                                <HighlightAbility>es7</HighlightAbility>. <br />
                                Understand nodejs backend development, can use nodejs (express, koa)
                                to develop small web background
                                <br />
                                Know the basic of chrome plugin develop, electron。<br />
                            </p>
                        </SelfIntro>
                    </div>
                </Card>

                <SelectionTitle>Skills</SelectionTitle>
                <div className="clearfix">
                    <SkillSelectionProfession>
                        <Card style={{ width: "100%", position: "relative" }}>
                            <SkillTypeIcon>
                                <Icon className="icon-code" />
                                <h3>Skills</h3>
                            </SkillTypeIcon>
                            <SkillItem style={{ marginTop: 60 }}>
                                <SkillName>Javascript</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">es6</Tag>
                                    <Tag color="#2196F3">jquery</Tag>
                                    <Tag color="#2196F3">react</Tag>
                                    <Tag color="#2196F3">d3</Tag>
                                </SkillScore>
                                <Progress percent={95} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>Css</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">less</Tag>
                                    <Tag color="#2196F3">postcss</Tag>
                                    <Tag color="#2196F3">styled-components</Tag>
                                </SkillScore>
                                <Progress percent={75} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>HTML</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">html5</Tag>
                                    <Tag color="#2196F3">hbs</Tag>
                                </SkillScore>
                                <Progress percent={80} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>SVG</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">d3</Tag>
                                    <Tag color="#2196F3">snap.svg</Tag>
                                </SkillScore>
                                <Progress percent={90} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>Build</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">gulp</Tag>
                                    <Tag color="#2196F3">browserify</Tag>
                                    <Tag color="#2196F3">webpack</Tag>
                                </SkillScore>
                                <Progress percent={75} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>NodeJS</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">express</Tag>
                                    <Tag color="#2196F3">koa</Tag>
                                    <Tag color="#2196F3">nginx</Tag>
                                </SkillScore>
                                <Progress percent={60} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>UI DESIGN</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">bootstrap</Tag>
                                    <Tag color="#2196F3">material</Tag>
                                    <Tag color="#2196F3">antd</Tag>
                                    <Tag color="#2196F3">UI中国</Tag>
                                </SkillScore>
                                <Progress percent={30} />
                            </SkillItem>
                        </Card>
                    </SkillSelectionProfession>
                    <SkillSelectionPersonal>
                        <Card style={{ width: "100%", position: "relative" }}>
                            <SkillTypeIcon>
                                <Icon className="icon-user" />
                                <h3>Personal</h3>
                            </SkillTypeIcon>

                            <SkillItem style={{ marginTop: 60 }}>
                                <SkillName>Communication</SkillName>
                                <Progress percent={70} />
                            </SkillItem>
                            <SkillItem>
                                <SkillName>Team Work</SkillName>
                                <Progress percent={70} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>Creative</SkillName>
                                <Progress percent={85} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>English</SkillName>
                                <SkillScore>
                                    <Tag color="#2196F3">CET-4</Tag>
                                    <Tag color="#2196F3">IELTS</Tag>
                                </SkillScore>
                                <Progress percent={70} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>Concentration</SkillName>
                                <Progress percent={80} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>Study</SkillName>
                                <Progress percent={80} />
                            </SkillItem>

                            <SkillItem>
                                <SkillName>Leadership</SkillName>
                                <Progress percent={20} />
                            </SkillItem>
                        </Card>
                    </SkillSelectionPersonal>
                </div>

                <SelectionTitle style={{ marginBottom: 35 }}>Experience</SelectionTitle>
                <TimeLineContainer>
                    <TimeLineIcon className="icon-work-experience" />

                    <TimeLineSelection>
                        <Card style={{ width: "100%" }}>
                            <TimeLineSelectionName>
                                苏州创意云网络科技有限公司
                                <br />
                                Suzhou Creative Cloud Network Technology Co., Ltd.
                            </TimeLineSelectionName>
                            <TimeLineSelectionSubTitle>
                                Senior Front-end Developer
                            </TimeLineSelectionSubTitle>
                            <br />
                            <Tag color="#2196F3">2017.09 - now</Tag>
                            <TimeLineSelectionDescription>
                                work as a Senior Front-end Developer, charge for AgileShot office
                                software web pages developing. The project is used for file
                                industry, help people manage and organize project. Project contains
                                three main module: AgilePlan、AgileScript、AgileLine.
                            </TimeLineSelectionDescription>
                        </Card>
                    </TimeLineSelection>

                    <TimeLineSelection floatToRight={true}>
                        <Card style={{ width: "100%" }}>
                            <TimeLineSelectionName>
                                苏州优圣美智能信息有限公司
                                <br />
                            </TimeLineSelectionName>
                            <TimeLineSelectionSubTitle>
                                Front-end Developer
                            </TimeLineSelectionSubTitle>
                            <br />
                            <Tag color="#2196F3">2015 - 2017.08</Tag>
                            <TimeLineSelectionDescription>
                                work as a Front-end Developer, charge for MLP(Data analysis system)
                                web pages developing. The project is used for bank industry, help
                                people monitor company IT status based on their logs. The project
                                involved a data visualization charts system using D3.js.
                            </TimeLineSelectionDescription>
                        </Card>
                    </TimeLineSelection>
                </TimeLineContainer>

                <SelectionTitle>Projects</SelectionTitle>
                <div>
                    <div style={{ textAlign: "center", marginBottom: 30 }} />
                    <FlexContainer style={{ margin: "0 -5px" }}>
                        <ProjectBlock>
                            <Card style={{ width: "100%", height: "100%" }}>
                                <ProjectName>AgileShot</ProjectName>
                                <ProjectType>Team</ProjectType>
                                <ProjectContent>AgileShot film industry Tools</ProjectContent>
                                <ProjectContent>
                                    The project based on The front end of the project is based on a
                                    single-page application developed by react + mobx. I am
                                    responsible for front-end development, including enterprise
                                    modules, AgilePlan network disk, financial module, AgileScript
                                    script module, and members of each module, permissions and
                                    settings.
                                </ProjectContent>

                                <ProjectContent>
                                    Various front-end technologies have been comprehensively applied
                                    in the project. Complex logic processing (permission system),
                                    chart display, file system simulation, make me React technology
                                    stack has in-depth understanding.
                                </ProjectContent>
                                <ProjectContent>
                                    <a href="http://agileshot.vsochina.com" target="_blank">
                                        product address
                                    </a>
                                </ProjectContent>
                            </Card>
                        </ProjectBlock>

                        <ProjectBlock>
                            <Card style={{ width: "100%", height: "100%" }}>
                                <ProjectName>Machine Learning Processor</ProjectName>
                                <ProjectType>Team</ProjectType>
                                <ProjectContent>
                                    MLP is a large-scale distributed log analysis system. Key
                                    features help customers analyze logs, proactive alarms, and
                                    historical data visualization.
                                </ProjectContent>
                                <ProjectContent>
                                    I am mainly responsible for the development and maintenance of
                                    project report pages, and the construction of front-end pages.
                                    Users can visually display data by dragging and dropping charts
                                    on the report page. Avoid the pain of writing code. Front-end
                                    projects are entirely driven by JavaScript-driven single-page
                                    applications. Through the iframe to achieve the jump of each
                                    page module, Set common components on the top level page to
                                    achieve synchronization.
                                </ProjectContent>
                            </Card>
                        </ProjectBlock>

                        <ProjectBlock>
                            <Card style={{ width: "100%", height: "100%" }}>
                                <ProjectName>找个律师</ProjectName>
                                <ProjectType>Team</ProjectType>
                                <ProjectContent>
                                    A lawyer-related app is simply coming soon as a pure static
                                    page, applied to gulp packages, less compiled css, and a jquery
                                    plugin fullpage.js. Project is hosted on github.
                                </ProjectContent>
                                <ProjectContent>
                                    <a href="https://github.com/JennerChen/lawyer" target="_blank">
                                        source
                                    </a>
                                </ProjectContent>
                            </Card>
                        </ProjectBlock>
                        <ProjectBlock>
                            <Card style={{ width: "100%", height: "100%" }}>
                                <ProjectName>Personal Cloudy Disk</ProjectName>
                                <ProjectType>Personal</ProjectType>
                                <ProjectContent>
                                    Currently is a file upload and download server, The server is
                                    deployed in Alibaba Cloud, relying on the Ali OSS object storage
                                    files. Save or share personal favorites. This project is used to
                                    comprehensively train the latest technology in peacetime
                                    research. Therefore, all technology stacks use the most
                                    cutting-edge。
                                </ProjectContent>
                                <ProjectContent>
                                    current version tech stack: react + redux + material design +
                                    antd
                                </ProjectContent>
                                <ProjectContent>
                                    <a
                                        href="https://github.com/JennerChen/simple-personal-cloudyService/tree/master"
                                        target="_blank">
                                        source
                                    </a>
                                    <br />
                                    <a
                                        href="https://github.com/JennerChen/simple-personal-cloudyService/tree/koa-mobx-v2"
                                        target="_blank">
                                        v2 source
                                    </a>
                                </ProjectContent>
                            </Card>
                        </ProjectBlock>

                        <ProjectBlock>
                            <Card style={{ width: "100%", height: "100%" }}>
                                <ProjectName>json-html-viewer</ProjectName>
                                <ProjectType>Personal</ProjectType>
                                <ProjectContent>
                                    React plugin for displaying json data, Parse the json data
                                    structure into html format. Supports json code highlighting,
                                    folding.
                                </ProjectContent>
                                <ProjectContent>
                                    <a
                                        href="https://github.com/JennerChen/json-html-viewer"
                                        target="_blank">
                                        source
                                    </a>
                                    <br />
                                    <a
                                        href="https://npm.taobao.org/package/json-html-viewer"
                                        target="_blank">
                                        cnpm
                                    </a>
                                </ProjectContent>
                            </Card>
                        </ProjectBlock>

                        <ProjectBlock>
                            <Card style={{ width: "100%", height: "100%" }}>
                                <ProjectName>redmineAutoFill</ProjectName>
                                <ProjectType>Personal</ProjectType>
                                <ProjectContent>
                                    Project Management Tools redmine Google Plugin, company project
                                    management contains a fixed format, Each time you fill in, you
                                    need to repeat the same actions. You have developed a simple
                                    Google plugin. Fill out the form automatically, eliminating the
                                    need to repeat each operation.
                                </ProjectContent>
                                <ProjectContent>
                                    <a
                                        href="https://github.com/JennerChen/redmineAutoFill"
                                        target="_blank">
                                        source
                                    </a>
                                    <br />
                                </ProjectContent>
                            </Card>
                        </ProjectBlock>
                    </FlexContainer>
                </div>

                <SelectionTitle style={{ marginBottom: 35 }}>Education</SelectionTitle>

                <TimeLineContainer>
                    <TimeLineIcon className="icon-school" />
                    <TimeLineSelection>
                        <Card style={{ width: "100%" }}>
                            <TimeLineSelectionName>
                                DIT Dublin Institute of Technology
                            </TimeLineSelectionName>
                            <TimeLineSelectionSubTitle>
                                Postgraduate-Advance Software Development
                            </TimeLineSelectionSubTitle>
                            <br />
                            <Tag color="#2196F3">2014 - 2015</Tag>
                            <TimeLineSelectionDescription>
                                Studying for graduate degrees, learning related courses in software
                                design and development, such as agile development, advanced database
                                programming paradigm, and 3 programming languages haskell, lua,
                                prolog
                            </TimeLineSelectionDescription>
                            <img
                                width={80}
                                style={{ position: "absolute", top: 25, right: 25 }}
                                src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMAAgQIAAkAAQAAAAAAABGOAAAAJDAyNWU5ZTkxLTJiZDMtNDY1Yi1hYjZlLTUzMjk0NzlmMzBiNQ.bin"
                            />
                        </Card>
                    </TimeLineSelection>

                    <TimeLineSelection floatToRight>
                        <Card style={{ width: "100%" }}>
                            <TimeLineSelectionName>
                                Waterford Institute of Technology
                            </TimeLineSelectionName>
                            <TimeLineSelectionSubTitle>
                                Undergraduate(4th)-Software Development{" "}
                            </TimeLineSelectionSubTitle>
                            <br />
                            <Tag color="#2196F3">2013 - 2014</Tag>
                            <TimeLineSelectionDescription>
                                Studying for the fourth year of undergraduate course, majoring in
                                software development, courses include web development, web security,
                                android development, java
                            </TimeLineSelectionDescription>
                            <img
                                width={80}
                                style={{ position: "absolute", top: 25, right: 25 }}
                                src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMAAQQIAAkAAQAAAAAAABBrAAAAJDU3ZmZkN2Q4LWQyOWUtNGVjNC1hYjg0LTRkMWNhZGNjOGEyOQ.bin"
                            />
                        </Card>
                    </TimeLineSelection>

                    <TimeLineSelection>
                        <Card style={{ width: "100%" }}>
                            <TimeLineSelectionName>
                                Nanjing University of Information Science & Technology
                            </TimeLineSelectionName>
                            <TimeLineSelectionSubTitle>
                                Undergraduate-Software Engineering
                            </TimeLineSelectionSubTitle>
                            <br />
                            <Tag color="#2196F3">2010 - 2013</Tag>
                            <TimeLineSelectionDescription>
                                Learning software development, the main courses include java,
                                software engineering, computer networks, data structures and other
                                computer theory knowledge
                            </TimeLineSelectionDescription>
                            <img
                                width={80}
                                style={{ position: "absolute", top: 25, right: 25 }}
                                src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMAAwQIAAkAAQAAAAAAAA5dAAAAJDRiNzZkMzQzLTE4YmItNDg3MS1iNmRlLTYzZjIxOGYxOWEzOQ.bin"
                            />
                        </Card>
                    </TimeLineSelection>
                </TimeLineContainer>
            </CvWrap>
        );
    }
}
