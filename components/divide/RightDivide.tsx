import React from 'react';

const RightDivide = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 sm-display-none">
          <div className="about-ceo margin-50px-left sm-no-margin-left">
            <img src="/images/divide/divide2.jpg" alt="" />
            <div className="inner-border" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="section-heading left">
            <h3>모던스터디에만 있는 프리미엄 1인실!</h3>
          </div>

          <p>
            내부에 사물함까지 있어 이용자분들이 편리하게 사용하실 수 있습니다.
            <br />
            (13좌석 한정)
          </p>

          <div className="border-bottom padding-20px-bottom margin-20px-bottom md-padding-15px-bottom md-margin-15px-bottom">
            <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 margin-20px-right no-margin-bottom">
              010-4355-6493
            </h4>
            <div className="display-inline-block margin-20px-right vertical-align-top">
              <strong className="font-weight-700 text-theme-color">or</strong>
            </div>
            <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 no-margin-bottom">
              Modern Study Cafe
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
      </div>
    </div>
  </section>
);

export default RightDivide;
