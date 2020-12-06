import React from 'react';

const About = () => (
  <section className="position-relative">
    <div className="container">
      <div className="bg-container"></div>
      <div className="row">
        <div className="col-lg-6 col-md-12 display-table">
          <div className="display-table-cell vertical-align-middle width-100 padding-50px-right md-padding-30px-right sm-no-padding">
            <div className="section-heading half left">
              <h2>우리 스터디 카페는요~</h2>
            </div>
            <p>
              24시간 오픈되어 있는 무인 프리미엄 스터디 카페로 스터디존,
              포커스존, 카페존, 스터디룸으로 구성되어 있습니다. 모던하고 깔끔한
              인테리어로 쾌적하고 건강한 공부환경을 조성하여 누구나 편안하게
              이용하실 수 있습니다. 공기청정기, 백색소음기, 방음설계 뿐 아니라
              보안과 안전을 책임지는 CCTV와 긴급출동 서비스까지 완비된
              모던스터디!!
            </p>

            <div className="process-steps-xs">
              <ul className="left-holder row no-margin-bottom">
                <li className="col-6 col-md-3">
                  <div className="process-step-xs center-holder">
                    <div className="process-step-icon">
                      <i className="icons-bug"></i>
                    </div>
                    <h3>감 시</h3>
                  </div>
                </li>
                <li className="col-6 col-md-3">
                  <div className="process-step-xs center-holder">
                    <div className="process-step-icon">
                      <i className="icons-telemarketer-1"></i>
                    </div>
                    <h3>확 인</h3>
                  </div>
                </li>
                <li className="col-6 col-md-3">
                  <div className="process-step-xs center-holder xs-no-margin-bottom">
                    <div className="process-step-icon">
                      <i className="icons-aim"></i>
                    </div>
                    <h3>긴급출동</h3>
                  </div>
                </li>
                <li className="col-6 col-md-3">
                  <div className="process-step-xs center-holder xs-no-margin-bottom">
                    <div className="process-step-icon">
                      <i className="icons-like"></i>
                    </div>
                    <h3>안정성 보장</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-9 col-xs-12 text-center display-table">
          <div className="display-table-cell vertical-align-middle sm-display-none">
            <img
              className="width-50 float-left padding-5px-right border-radius-5"
              alt=""
              src="/images/about/about1.jpg"
            />
            <img
              className="width-50 float-left padding-5px-left border-radius-5"
              alt=""
              src="/images/about/about2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
