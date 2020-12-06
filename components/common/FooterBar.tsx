import React from 'react';
import styled from 'styled-components';

const FooterBar = () => (
  <div className="footer-bar">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-left xs-text-center xs-margin-5px-bottom">
          <div className="footer-social-icons small">
            <ul>
              <li>
                <a href="https://instagram.com/modernstudy_eungye">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://blog.naver.com/modernstudycafe">
                  <Naver />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 text-right xs-text-center">
          <p className="xs-margin-5px-top xs-font-size13">
            &copy; 2020, Modern Study Cafe.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FooterBar;

// Styles
const Naver = styled.span`
  &:before {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    content: 'N';
  }
`;
