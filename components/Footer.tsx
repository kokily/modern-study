import React from 'react';
import styled from 'styled-components';
import FooterLeft from './FooterLeft';
import FooterCenter from './FooterCenter';
import FooterRight from './FooterRight';
import FooterBar from './FooterBar';

const Footer = () => {
  return (
    <FooterBox>
      <div className="container">
        <div className="row">
          <FooterLeft />
          <FooterCenter />
          <FooterRight />
        </div>
      </div>
      <FooterBar />
    </FooterBox>
  );
};

export default Footer;

// Styles
const FooterBox = styled.footer``;
