import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import OpenEvent from '../components/event/OpenEvent';

const PlusOnePage = () => (
  <>
    <Head>
      <title>오픈 이벤트 - 모던스터디카페</title>
    </Head>
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
              <h1>오픈 이벤트</h1>
            </div>
          </div>
        </div>
      </section>

      <OpenEvent />
    </PageTemplate>
  </>
);

export default PlusOnePage;
