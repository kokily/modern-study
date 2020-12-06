import React from 'react';

interface EventProps {
  title: string;
  divide: string;
  date: string;
  body: string;
  image: string;
  link: string;
}

const Event: React.FC<EventProps> = ({
  title,
  divide,
  date,
  body,
  image,
  link,
}) => (
  <section>
    <div className="container">
      <div className="blog-list-simple">
        <div className="row">
          <div className="col-md-5 col-sm-12 sm-margin-20px-bottom">
            <div className="blog-list-simple-img">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="blog-list-simple-text">
              <h4>{title}</h4>
              <ul className="meta">
                <li>
                  <i aria-hidden="true" className="fa fa-user"></i> 관리자
                </li>
                <li>
                  <i aria-hidden="true" className="fa fa-folder-open"></i>{' '}
                  {divide}
                </li>
                <li>
                  <i aria-hidden="true" className="fas fa-calendar-alt"></i>{' '}
                  {date}
                </li>
              </ul>
              <p>{body}</p>
              <div className="text-left">
                <a href={`/${link}`} className="butn small">
                  <span>내용 보기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Event;
