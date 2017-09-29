import styled, { css } from 'styled-components';
import bannerMobile from './bannerMobile.jpg';
import bannerLarge from './bannerLarge.jpg'
import Bg1024 from './bg1024.jpg';

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
};


// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
  return acc
}, {})

export const Container = styled.div`
background-image: url(${bannerLarge});
background-size: 100%;
background-size: cover;
background-repeat: no-repeat;
z-index: -1;
  ${media.desktop`background-image: url(${bannerLarge});`}
  ${media.phone`background-image: url(${bannerMobile});`}
`;


export const Blend = styled.div`
    mix-blend-mode: exclusion;
  color: white;
  display: block;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-size: 160px;
  font-family: 'Orbitron', sans-serif;
`

export const H1 = styled.h1`
font-size: 160px;
color: white;
  ${media.desktop`font-size: 160px;`}
  ${media.tablet`font-size: 100px;`}
  ${media.phone`font-size: 60px;`}
`;

export const Backdrop = styled.div`
background-image: url(${Bg1024});
width: 600px;
height: 210px;
background-size: 100%;
margin: auto;
`;

export const Overlay = styled.div`
background-color: rgba(0,255,255,.1);
mix-blend-mode: multiply;
width: 100%;
height: 100%;
position: absolute;
top: 0;
`;


export const P = styled.p`
  color: black;
  background-color: white;
  mix-blend-mode: screen;
  width: 100%;
  height: 100%;
  font-size: 160px;
  font-weight: bolder;
  text-align: center;
  line-height: 210px;
  margin: auto;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
