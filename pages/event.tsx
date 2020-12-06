import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import Event from '../components/event/Event';

const EventPage = () => (
  <>
    <PageTemplate>
      <section
        className="page-title-section2 bg-img cover-background"
        data-overlay-dark="7"
        data-background="/images/event/event.jpg"
        style={{ backgroundImage: 'url(/images/event/event.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>이벤트 & 커뮤니티</h1>
            </div>
          </div>
        </div>
      </section>

      <Event
        title="모던스터디 특가 이벤트!"
        divide="이벤트"
        date="2020. 4. 1."
        body="알고있나 hoxy~?"
        image="/images/event/event1prev.png"
        link="plusone"
      />
    </PageTemplate>
  </>
);

export default EventPage;
