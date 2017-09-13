import React from "react";
import PropTypes from "prop-types";

import {
  FooterWrapper,
  FooterLink
} from "./Styles";

export default function Footer(props) {
  return (
    <FooterWrapper>
      <h1>Footer</h1>
      <FooterLink href="">Link</FooterLink>
    </FooterWrapper>
  );
}

