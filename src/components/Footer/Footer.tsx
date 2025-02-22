import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #34495e;
  color: white;
  padding: 1rem;
  text-align: center;
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
