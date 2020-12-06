import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Menu from './Menu';

const Header = () => {
  const router = useRouter();

  const onBlog = () => {
    router.replace('https://blog.naver.com/modernstudycafe');
  };

  const onInsta = () => {
    router.replace('https://instagram.com/modernstudy_eungye');
  };

  return (
    <HeaderBlock>
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="top-bar-info">
                <ul>
                  <li>
                    <i className="fas fa-mobile-alt" />
                    010-4355-6493
                  </li>
                  <li>
                    <i className="fas fa-envelope" />
                    modernstudycafe@naver.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-md-3 xs-display-none">
              <ul className="top-social-icon">
                <li>
                  <a onClick={onBlog}>
                    <Naver />
                  </a>
                </li>
                <li>
                  <a onClick={onInsta}>
                    <Instagram className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Menu />
    </HeaderBlock>
  );
};

export default Header;

// Styles
const HeaderBlock = styled.header``;

const Naver = styled.span`
  cursor: pointer;
  &:before {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 600;
    content: 'N';
    color: #62c15b;
  }
  &:hover:before {
    color: #bcffb5;
  }
`;

const Instagram = styled.i`
  font-size: 16px;
  color: #ff77c2;
  cursor: pointer;
  &:hover {
    color: #ffbfff;
  }
`;
