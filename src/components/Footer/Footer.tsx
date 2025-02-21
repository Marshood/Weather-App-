"use client";
import React from "react";

import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #34495e;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Footer = () => (
  <FooterWrapper>
    <p>
      {" "}
      &copy; {new Date().getFullYear()} Weather App React Take-Home Task. All
      rights reserved.
    </p>
  </FooterWrapper>
);

export default Footer;
