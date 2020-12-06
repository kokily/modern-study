import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import Interior from '../components/interior/Interior';

const CafeZonePage = () => (
  <>
    <Head>
      <title>카페 존 - 모던스터디카페</title>
      <meta
        name="description"
        content="카페 존, 음식 금지, 컴퓨터 및 복합기 설치"
      />
    </Head>
    <PageTemplate>
      <Interior
        title="카페 존"
        image="/images/rooms/cafezone.jpg"
        category="떡볶이, 라면 등 국물있는 음식 금지, 냄새나는 음식섭취 금지"
        usage="컴퓨터, 복합기 설치"
        allowance="명"
      />
    </PageTemplate>
  </>
);

export default CafeZonePage;
