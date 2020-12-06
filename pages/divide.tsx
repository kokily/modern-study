import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import LeftDivide from '../components/divide/LeftDivide';
import RightDivide from '../components/divide/RightDivide';

const DividePage = () => (
  <>
    <Head>
      <title>차별성 - 모던스터디카페</title>
      <meta
        name="description"
        content="취향별 스터디 카페, 대형 평수, 1인실 스터디 카페"
      />
    </Head>
    <PageTemplate>
      <section
        className="page-title-section2 bg-img cover-background"
        data-overlay-dark="7"
        data-background="/images/divide/main.jpg"
        style={{ backgroundImage: 'url(/images/divide/main.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>모던스터디만의 차별성</h1>
            </div>
          </div>
        </div>
      </section>

      <LeftDivide />
      <RightDivide />
    </PageTemplate>
  </>
);

export default DividePage;
