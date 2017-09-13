import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { Flex, Box } from 'grid-styled';


export const NavLinks = styled(Box) `
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    a {
        color: #f2f2f2;
        text-decoration: none;
    }
    list-style: none;
    a:hover {
        background-color: "#99cc33";
        &:after {
            content: ' ';
            position: abolute;
            left: 100%;
            height: 100%;
            background-color: "#99cc33";
            z-index: -1;
            transform: scale(1.5, 1.5);
        }
    }
      &:active {
    background: "#99cc33";
    color: #FFF;
  }
    `;

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
  return acc
}, {})

export const NavbarFlex = styled(Flex) `
    background-color: rgba(65, 75, 98, 0.5);
    padding: 0;
    display: flex;
    flex-direction: row;
    	/* Now we have our methods on media and can use them instead of raw queries */
	${media.desktop`flex-direction: row;`}
	${media.tablet`flex-direction: row;`}
	${media.phone`flex-direction: column;`}
    `;

















