import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import Interior from '../components/interior/Interior';

const StudyZonePage = () => (
  <>
    <Head>
      <title>스터디 존 - 모던스터디카페</title>
      <meta
        name="description"
        content="스터디 존, 무음 키보드 사용, 타이핑 금지, 71명 수용"
      />
    </Head>
    <PageTemplate>
      <Interior
        title="스터디 존"
        image="/images/rooms/studyzone.jpg"
        category="타이핑 금지"
        usage="무음 키보드 및 마우스 사용"
        allowance="71명"
      />
    </PageTemplate>
  </>
);

export default StudyZonePage;
