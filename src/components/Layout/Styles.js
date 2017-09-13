import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f6f6ef;
  padding: 8px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10pt;
`;

export const FooterWrapper = styled.div`
  padding: 4px 0px 0px 24px;
  font-size: 7pt;
  color: #828282;
  margin: 0;
`;

export const FooterLink = styled.a.attrs({
  target: "_blank"
}) `
  color: #828282;
  text-decoration: none;
  margin: 0px 3px;
`;



