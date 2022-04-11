import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Login from './user/login';

const Home = () => (
  <>
    <Head>
      <title>POC | NEXTJS CES2.0</title>
      <meta
        name="description"
        content="Next.js + SWR codebase containing login example that consumes to the login API"
      />
    </Head>
    <div className="home-page">
      <div className="container page">
        <div className="row">
          <Login />
        </div>
      </div>
    </div>
  </>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home;
