import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import "particles.js";
import CVZH from "./cv.zh";

const CVHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: #304fff;
    z-index:100;
`;
const ParticleContainer = styled.div`
    width: 100%;
	height: 100%;
	background-color: #d4d4d4;
	background-image: url("/img/cv-particles-bg.jpg");
	background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity:.5;
`;


const particleConfig = {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
};

@inject("store")
@observer
export default class CV extends React.Component {
	componentDidMount() {
		particlesJS("particles-js", particleConfig)
	}
	
	render() {
		return <div style={{backgroundColor: '#eee'}}>
			<CVHeader>
				<ParticleContainer id="particles-js"/>
			</CVHeader>
			<CVZH />
		</div>
	}
}