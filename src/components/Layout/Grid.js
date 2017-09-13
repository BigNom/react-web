import styled, { css } from 'styled-components';

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 640
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

export const Grid = styled.div`
display: grid;
grid-template-columns: [content-start] 1fr [content-end];
grid-template-rows: auto [content-start] auto [content-end];
grid-gap: 20px;
div {
  border: 1px solid rgb(0,95,107);
  background-color: rgba(0,95,107,0.8);
  border-radius: 3px;
  padding: 0.2em;
}
  ${media.desktop`grid-template-columns: [content-start] 1fr [content-end];`}
	${media.phone`grid-template-columns: 2fr [content-start] 4fr [content-end];`}

`;

export const Header = styled.div`
grid-column: 1/3;
	${media.phone`grid-template-columns: 2fr [content-start] 4fr [content-end];`}
`

export const Aside = styled.div`
grid-column: 1;
grid-row: 2;
	${media.phone`grid-template-columns: 2fr [content-start] 4fr [content-end];`}
`

export const Article = styled.div`
grid-column: 2;
grid-row: 2;
	${media.phone`grid-template-columns: 2fr [content-start] 4fr [content-end];`}
`;

export const Footer = styled.div`
grid-column: 1 / 3;
grid-row: 3;
	${media.phone`grid-template-columns: 2fr [content-start] 4fr [content-end];`}
`;

