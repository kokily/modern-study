import React from 'react';

const LeftDivide = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading left">
            <h3>모던스터디만의 차별성</h3>
          </div>

          <p>
            모든 이용자분들의 취향을 고려하여 여러가지 형태의 좌석으로 구성되어
            있습니다. 대형 평수이기도 하지만 이러한 설계 덕분에 탁 트인 느낌이
            나서 쾌적하답니다. 혼자만의 공간에서 공부하고 싶은 분들은 벽 쪽에
            배치된 좌석을 이용하면 됩니다. 1인실의 장점과 오픈 자리의 장점을
            모두 가지고 있는 좌석이라 가장 인기있습니다.
          </p>

          <div className="border-bottom padding-20px-bottom margin-20px-bottom md-padding-15px-bottom md-margin-15px-bottom">
            <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 margin-20px-right no-margin-bottom">
              010-4355-6493
            </h4>
            <div className="display-inline-block margin-20px-right vertical-align-top">
              <strong className="font-weight-700 text-theme-color">or</strong>
            </div>
            <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 no-margin-bottom">
              modernstudycafe@naver.com
            </h4>
          </div>

          <div className="text-right float-left width-100">
            <p className="float-left text-left no-margin">
              <span className="font-weight-700 display-block">
                Admin (관리자)
              </span>
              Modern Study Cafe
            </p>
          </div>
        </div>

        <div className="col-lg-6 sm-display-none">
          <div className="about-ceo margin-50px-left sm-no-margin-left">
            <img src="/images/divide/divide1.jpg" alt="" />
            <div className="inner-border" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LeftDivide;
