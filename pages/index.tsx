import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Card from '../components/home/Card';

const IndexPage = () => {
  return (
    <PageTemplate>
      <section
        className="page-title-section2 bg-img cover-background"
        data-overlay-dark="7"
        data-background="/images/main/main1.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>모던스터디카페</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="filtering col-sm-12 text-center">
              <span data-filter="*" className="active">
                전 체
              </span>
              <span data-filter=".main1">#01</span>
              <span data-filter=".main2">#02</span>
              <span data-filter=".main3">#03</span>
            </div>
          </div>

          <div className="gallery text-center form-row">
            <Card url="/images/main/main1.jpg" title="모던스터디 #1" option="main1" />
            <Card url="/images/main/main2.jpg" title="모던스터디 #2" option="main2" />
            <Card url="/images/main/main3.jpg" title="모던스터디 #3" option="main3" />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default IndexPage;
