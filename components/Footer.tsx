import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBox>
      <div className="container">
        <div className="row">
          <FooterLeft />
          <FooterCenterOne />
          <FooterCenterTwo />
          <FooterRight />
        </div>
      </div>
      <FooterBar />
    </FooterBox>
  );
};

const FooterLeft = () => (
  <div className="col-lg-4 col-md-6 sm-margin-30px-bottom">
    <img src="/images/logoft.png" alt="FooterLogo" />
    <p className="margin-25px-top margin-20px-bottom">
      집중이 잘 되는 스터디 카페!
      <br />
      모던 스터디 카페
    </p>

    <ul className="footer-list">
      <li>
        <span className="d-inline-block vertical-align-top font-size18">
          <i className="fas fa-map-marker-alt text-theme-color"></i>
        </span>
        <span className="d-inline-block width-85 vertical-align-top padding-10px-left">
          경기 시흥시 은계번영길 5 푸리마타워 4층
        </span>
      </li>
      <li>
        <span className="d-inline-block vertical-align-top font-size18">
          <i className="fas fa-mobile-alt text-theme-color"></i>
        </span>
        <span className="d-inline-block width-85 vertical-align-top padding-10px-left">
          010-4355-6493
        </span>
      </li>
      <li>
        <span className="d-inline-block vertical-align-top font-size18">
          <i className="far fa-envelope text-theme-color"></i>
        </span>
        <span className="d-inline-block width-85 vertical-align-top padding-10px-left">
          modernstudycafe@naver.com
        </span>
      </li>
    </ul>
  </div>
);

const FooterCenterOne = () => (
  <div className="col-lg-2 col-md-6 sm-margin-30px-bottom">
    <h3 className="text-white">빠른 링크</h3>
    <ul className="footer-list">
      <li>
        <Link href="/about">
          <a>브랜드 스토리</a>
        </Link>
      </li>
      <li>
        <Link href="/divide">
          <a>모던스터디 차별성</a>
        </Link>
      </li>
      <li>
        <Link href="/studyzone">
          <a>인테리어 공간</a>
        </Link>
      </li>
      <li>
        <Link href="/event">
          <a>이벤트&커뮤니티</a>
        </Link>
      </li>
    </ul>
  </div>
);

const FooterCenterTwo = () => (
  <div className="col-lg-3 col-md-6 xs-margin-20px-bottom">
    <h3 className="text-white">인테리어 공간</h3>

    <div className="clearfix footer-recent-post no-margin-top">
      <div className="footer-recent-post-thumb">
        <img alt="img" src="/images/rooms/studyzone.jpg" />
      </div>
      <div className="footer-recent-post-content">
        <Link href="/studyzone">
          <a>스터디 존</a>
        </Link>
      </div>
    </div>
    <div className="clearfix footer-recent-post">
      <div className="footer-recent-post-thumb">
        <img alt="img" src="/images/rooms/privacyroom.jpg" />
      </div>
      <div className="footer-recent-post-content">
        <Link href="/privacyroom">
          <a>1인 집중실</a>
        </Link>
      </div>
    </div>
    <div className="clearfix footer-recent-post">
      <div className="footer-recent-post-thumb">
        <img alt="img" src="/images/rooms/cafezone.jpg" />
      </div>
      <div className="footer-recent-post-content">
        <Link href="/cafezone">
          <a>카페 존</a>
        </Link>
      </div>
    </div>
    <div className="clearfix footer-recent-post">
      <div className="footer-recent-post-thumb">
        <img alt="img" src="/images/rooms/studyroom.jpg" />
      </div>
      <div className="footer-recent-post-content">
        <Link href="/studyroom">
          <a>스터디 룸</a>
        </Link>
      </div>
    </div>
  </div>
);

const FooterRight = () => (
  <div className="col-lg-3 col-md-6">
    <h3 className="text-white">오시는 길</h3>
    <div className="text-light-gray margin-20px-bottom">
      <KakaoMap>
        <KakaoImage>
          <Link href="https://map.kakao.com/?urlX=456100.0&amp;urlY=1093784.0&amp;name=%EA%B2%BD%EA%B8%B0%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%9D%80%EA%B3%84%EB%B2%88%EC%98%81%EA%B8%B8%205&amp;map_type=TYPE_MAP&amp;from=roughmap">
            <a>
              <img
                className="map"
                src="https://t1.daumcdn.net/roughmap/imgmap/2ce23d7e3d21884ef17188151ae0004ea0dfc81a098b0321553a7e898641e879"
                alt=""
                style={{
                  border: '1px solid #ccc',
                  width: '318px',
                  height: '198px',
                }}
              />
            </a>
          </Link>
        </KakaoImage>

        <KakaoLeft>
          <Link href="https://map.kakao.com">
            <a style={{ float: 'left' }}>
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                width="72"
                height="16"
                alt="카카오맵"
                style={{
                  display: 'block',
                  width: '72px',
                  height: '16px',
                }}
              />
            </a>
          </Link>

          <KakaoRight>
            <Link href="https://map.kakao.com/?from=roughmap&amp;eName=%EA%B2%BD%EA%B8%B0%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%9D%80%EA%B3%84%EB%B2%88%EC%98%81%EA%B8%B8%205&amp;eX=456100.0&amp;eY=1093784.0">
              <a
                style={{
                  float: 'left',
                  height: '15px',
                  paddingTop: '1px',
                  lineHeight: '15px',
                  color: '#000',
                  textDecoration: 'none',
                }}
              >
                길찾기(네비게이션)
              </a>
            </Link>
          </KakaoRight>
        </KakaoLeft>
      </KakaoMap>
    </div>
  </div>
);

const FooterBar = () => (
  <div className="footer-bar">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-left xs-text-center xs-margin-5px-bottom">
          <div className="footer-social-icons small">
            <ul>
              <li>
                <a
                  href="https://instagram.com/modernstudy_eungye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://blog.naver.com/modernstudycafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

export default Footer;

// Styles
const FooterBox = styled.footer``;

const Naver = styled.span`
  &:before {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    content: 'N';
  }
`;

const KakaoMap = styled.div`
  font: normal normal 400 12px / normal dotum, sans-serif;
  width: 320px;
  height: 232px;
  color: #333;
  position: relative;
`;

const KakaoImage = styled.div`
  height: 200px;
`;

const KakaoLeft = styled.div`
  overflow: hidden;
  padding: 7px 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 2px 2px;
  background-color: rgba(249, 249, 249);
`;

const KakaoRight = styled.div`
  float: right;
  position: relative;
  top: 1px;
  font-size: 11px;
`;
