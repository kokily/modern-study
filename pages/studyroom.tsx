import React from 'react';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import Interior from '../components/interior/Interior';

const StudyRoomPage = () => (
  <>
    <Head>
      <title>스터디 룸 - 모던스터디카페</title>
      <meta name="description" content="스터디 룸, 칠판 겸비, 7~8명 수용가능" />
    </Head>
    <PageTemplate>
      <Interior
        title="스터디 룸"
        image="/images/rooms/studyroom.jpg"
        category=""
        usage="칠판 겸비"
        allowance="7~8명"
      />
    </PageTemplate>
  </>
);

export default StudyRoomPage;
