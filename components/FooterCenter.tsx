import React from 'react';
import Link from 'next/link';

const FooterCenter = () => (
  <>
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
  </>
);

export default FooterCenter;
