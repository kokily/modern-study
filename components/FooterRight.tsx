import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

export default FooterRight;

// Styles
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
