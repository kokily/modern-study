import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import Interior from '../components/interior/Interior';

const PrivacyRoomPage = () => (
  <>
    <Head>
      <title>1인 집중실 - 모던스터디카페</title>
      <meta
        name="description"
        content="1인 집중실, 포커스 존, 노트북 X, 사물함 포함, 13명 수용"
      />
    </Head>
    <PageTemplate>
      <Interior
        title="1인 집중실(포커스존)"
        image="/images/rooms/privacyroom.jpg"
        category="노트북 X(인강 허용)"
        usage="사물함 포함"
        allowance="13명"
      />
    </PageTemplate>
  </>
);

export default PrivacyRoomPage;
