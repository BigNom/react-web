import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
&::after {
  content: "";
  clear: both;
  display: table;
}
`;


function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div`
background-color: #e4e4e4;
border: 1px solid #f5f5f5;
float: left;
${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")}:

@media only screen and (min-width: 768px) {
  ${({ sm }) => sm && getWidthString(sm)};
}

@media only screen and (min-width: 992px) {
  ${({ md }) => md && getWidthString(md)};
}

@media only screen and (min-width: 1200px) {
  ${({ lg }) => lg && getWidthString(lg)};
}
`;

export default function Grid(props) {
  return (
    <div>
      <Row>
        <Column span="3">1</Column>
        <Column span="1">4</Column>
        <Column span="4">5</Column>
        <Column span="1">6</Column>
        <Column span="1">7</Column>
        <Column span="1">8</Column>
        <Column span="1">9</Column>
        <Column span="1">10</Column>
        <Column span="1">11</Column>
        <Column span="1">12</Column>
      </Row>
    </div>
  );
}
