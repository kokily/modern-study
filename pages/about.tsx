import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import About from '../components/about/About';

const AboutPage = () => {
  return (
    <PageTemplate>
      <Head>
        <title>브랜드 스토리 - 모던스터디카페</title>
        <meta
          name="description"
          content="24시간 오픈, 무인, 무인 프리미엄 스터디 카페, 긴급출동서비스"
        />
      </Head>

      <section
        className="page-title-section2 bg-img cover-background"
        data-overlay-dark="7"
        data-background="/images/about/main.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mb-2">브랜드 스토리</h1>
              <h3 style={{ color: '#d2d2d2' }}>모던 스터디 카페</h3>
            </div>
          </div>
        </div>
      </section>

      <About />
    </PageTemplate>
  );
};

export default AboutPage;
