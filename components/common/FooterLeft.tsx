import React from 'react';

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

export default FooterLeft;
