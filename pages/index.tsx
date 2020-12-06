import React from 'react';
import Link from 'next/link';
import PageTemplate from '../components/common/PageTemplate';

const IndexPage = () => {
  return (
    <PageTemplate>
      <div className="rev_slider_wrapper">
        <div className="rev_slider" id="rev_slider_3" data-version="5.4.5">
          <ul>
            <li
              data-fstransition="fade"
              data-transition="fade"
              data-easein="default"
              data-easeout="default"
              data-slotamount="1"
              data-masterspeed="1200"
              data-delay="8000"
              data-title="Modern Study Cafe"
            >
              <div className="opacity-light bg-black z-index-1"></div>
              <img
                src="/images/main/main1.jpg"
                alt=""
                data-bgrepeat="no-repeat"
                data-bgfit="cover"
                data-bgparallax="7"
                className="rev-slidebg"
              />

              <SubTitles />
            </li>

            <li
              data-fstransition="fade"
              data-transition="fade"
              data-easein="default"
              data-easeout="default"
              data-slotamount="1"
              data-masterspeed="1200"
              data-delay="8000"
              data-title="Privacy Room"
            >
              <div className="opacity-light bg-black z-index-1"></div>
              <img
                src="/images/main/main2.jpg"
                alt=""
                data-bgrepeat="no-repeat"
                data-bgfit="cover"
                data-bgparallax="7"
                className="rev-slidebg"
              />

              <SubTitles />
            </li>

            <li
              data-fstransition="fade"
              data-transition="fade"
              data-easein="default"
              data-easeout="default"
              data-slotamount="1"
              data-masterspeed="1200"
              data-delay="8000"
              data-title="Study Zone"
            >
              <div className="opacity-light bg-black z-index-1"></div>
              <img
                src="/images/main/main3.jpg"
                alt=""
                data-bgrepeat="no-repeat"
                data-bgfit="cover"
                data-bgparallax="7"
                className="rev-slidebg"
              />

              <SubTitles />
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
};

const SubTitles = () => {
  return (
    <>
      <div
        className="tp-caption hero-text alt-font font-weight-600 text-white text-center"
        data-x="['center','center','center','center']"
        data-y="center"
        data-voffset="[-84,-63,-68,-108]"
        data-fontsize="[72,62,52,46]"
        data-lineheight="[72,62,52,46]"
        data-width="[none, none, none, 300]"
        data-whitespace="[nowrap, nowrap, nowrap, normal]"
        data-frames='[{
                        "delay":1000,
                        "speed":900,
                        "frame":"0",
                        "from":"y:150px;opacity:0;",
                        "ease":"Power3.easeOut",
                        "to":"o:1;"
                        },{
                        "delay":"wait",
                        "speed":1000,
                        "frame":"999",
                        "to":"opacity:0;","ease":"Power3.easeOut"
                    }]'
        data-splitout="none"
      >
        모던스터디 카페
      </div>

      <div
        className="tp-caption small-text text-white slider-text text-center"
        data-x="['center','center','center','center']"
        data-y="center"
        data-voffset="[10,40,36,56]"
        data-fontsize="[21,21,21,21]"
        data-lineheight="34"
        data-width="[600, 500, 400, 300]"
        data-whitespace="[nowrap, nowrap, nowrap, normal]"
        data-frames='[{
                        "delay":1100,
                        "speed":900,
                        "frame":"0",
                        "from":"y:150px;opacity:0;",
                        "ease":"Power3.easeOut",
                        "to":"o:1;"
                        },{
                        "delay":"wait",
                        "speed":1000,
                        "frame":"999",
                        "to":"opacity:0;","ease":"Power3.easeOut"
                    }]'
      >
        <p className="white-space">
          안녕하세요 모던스터디 카페에
          <br />
          오신 것을 환영합니다
        </p>
      </div>

      <div
        className="tp-caption text-center"
        data-x="['center','center','center','center']"
        data-y="center"
        data-voffset="[102,145,150,204]"
        data-lineheight="55"
        data-hoffset="0"
        data-frames='[{
                            "delay":1200,
                            "speed":900,
                            "frame":"0",
                            "from":"y:150px;opacity:0;",
                            "ease":"Power3.easeOut",
                            "to":"o:1;"
                            },{
                            "delay":"wait",
                            "speed":1000,
                            "frame":"999",
                            "to":"opacity:0;","ease":"Power3.easeOut"
                        }]'
      >
        <Link href="/studyzone">
          <a className="butn theme white-hover">
            <span>인테리어</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;
