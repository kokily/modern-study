import React from 'react';

const FooterCenter = () => (
  <>
    <div className="col-lg-2 col-md-6 sm-margin-30px-bottom">
      <h3 className="text-white">빠른 링크</h3>
      <ul className="footer-list">
        <li>
          <a href="/about">브랜드 스토리</a>
        </li>
        <li>
          <a href="/divide">모던스터디 차별성</a>
        </li>
        <li>
          <a href="/studyzone">인테리어 공간</a>
        </li>
        <li>
          <a href="/event">이벤트&커뮤니티</a>
        </li>
      </ul>
    </div>
    <div className="col-lg-3 col-md-6 xs-margin-20px-bottom">
      <h3 className="text-white">인테리어 공간</h3>

      <div className="clearfix footer-recent-post no-margin-top">
        <div className="footer-recent-post-thumb">
          <img alt="img" src="/images/rooms/studyzone.jpg" />
        </div>
        <div className="footer-recent-post-content">
          <a href="/studyzone">스터디 존</a>
        </div>
      </div>
      <div className="clearfix footer-recent-post">
        <div className="footer-recent-post-thumb">
          <img alt="img" src="/images/rooms/privacyroom.jpg" />
        </div>
        <div className="footer-recent-post-content">
          <a href="/privacyroom">1인 집중실</a>
        </div>
      </div>
      <div className="clearfix footer-recent-post">
        <div className="footer-recent-post-thumb">
          <img alt="img" src="/images/rooms/cafezone.jpg" />
        </div>
        <div className="footer-recent-post-content">
          <a href="/cafezone">카페 존</a>
        </div>
      </div>
      <div className="clearfix footer-recent-post">
        <div className="footer-recent-post-thumb">
          <img alt="img" src="/images/rooms/studyroom.jpg" />
        </div>
        <div className="footer-recent-post-content">
          <a href="/studyroom">스터디 룸</a>
        </div>
      </div>
    </div>
  </>
);

export default FooterCenter;
