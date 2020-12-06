import React from 'react';

interface InteriorProps {
  title: string;
  image: string;
  category: string;
  usage: string;
  allowance: string;
}

const Interior: React.FC<InteriorProps> = ({
  title,
  image,
  category,
  usage,
  allowance,
}) => (
  <>
    <section
      className="page-title-section2 bg-img cover-background"
      data-overlay-dark="7"
      data-background="/images/rooms/studyzone.jpg"
      style={{ backgroundImage: 'url(/images/rooms/studyzone.jpg)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-3">{title}</h1>
            <h3 style={{ color: '#e3e3e3' }}>인테리어 공간</h3>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row margin-50px-bottom sm-margin-30px-bottom">
          <div className="col-lg-8 col-md-12 sm-margin-30px-bottom">
            <div className="project-single-box-img">
              <img src={image} alt="" />
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="section-heading half left">
              <h6>{title} 정보</h6>
            </div>

            <div className="project-single-info">
              <ul className="no-margin">
                <li>
                  <span className="vertical-align-top">명 칭:</span>{' '}
                  <span className="value">{title}</span>
                </li>
                <li>
                  <span className="vertical-align-top">주의사항:</span>{' '}
                  <span className="value">{category}</span>
                </li>
                <li>
                  <span className="vertical-align-top">특 징:</span>{' '}
                  <span className="value">{usage}</span>
                </li>
                <li>
                  <span className="vertical-align-top">허용인원:</span>{' '}
                  <span className="value">{allowance}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Interior;
