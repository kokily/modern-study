import React from 'react';

interface CardProps {
  url: string;
  title: string;
  option: string;
}

const Card: React.FC<CardProps> = ({ url, title, option }) => (
  <div className={`col-lg-4 col-md-6 items ${option}`}>
    <div className="project-grid">
      <div className="proejct-grid-img">
        <img src={url} alt="" />
      </div>
      <div className="project-grid-overlay">
        <div className="width-100 px-3">
          <h4>
            <a href={url} className="popimg">
              자세히 보기
            </a>
            <p>{title}</p>
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
