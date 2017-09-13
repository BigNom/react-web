import styled, { css } from 'styled-components';

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
};

export const Wrapper = styled.div`
background-color: #f6f6f6;
padding: 8px;
`;

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
  return acc
}, {})

export const NavMobile = styled.div`
  background-color: blue;
    margin: 0 auto;
    display: block;
    border: 5px solid grey;
  ${media.desktop`display: none;`}
  ${media.tablet`display: none;`}
  	${media.phone`display: flex;`}
`;

export const Nav = styled.div`
  background-color: grey;
  overflow: hidden;
  padding: 1em;
  z-index: 10;
  width: 100vw;
  a {
    color: #FFF;
  }
  a: visited {
    color: #FFF;
  }
`;

export const NavWide = styled.div`
  display: block;
  margin: 0 auto;
  background-color: pink;
  ${media.desktop`display: block;`}
  ${media.tablet`display: block;`}
  	${media.phone`display: none;`}
`;

export const WideDiv = styled.a`
text-align: center;
`;

export const NavNarrow = styled.button`
  display: none;
  ${media.desktop`display: none;`}
  ${media.tablet`display: none;`}
  ${media.phone`display: block;`}
    `;

export const NarrowLinks = styled.a`
      text-decoration: none;
      float: left;
      clear: left;
      padding: 0.5em 1em;
        ${media.desktop`display: none;`}
  ${media.tablet`display: none;`}
  	${media.phone`display: block;`}

`;

