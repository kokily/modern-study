import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import Interior from '../components/interior/Interior';

const EtcRoomPage = () => (
  <>
    <Head>
      <title>기 타 - 모던스터디카페</title>
      <meta name="description" content="기타, 모던 스터디 카페" />
    </Head>
    <PageTemplate>
      <Interior
        title=""
        image="/images/rooms/etc.jpg"
        category=""
        usage=""
        allowance=""
      />
    </PageTemplate>
  </>
);

export default EtcRoomPage;
