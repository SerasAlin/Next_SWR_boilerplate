import Head from 'next/head';
import React from 'react';

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
          <MainView />
        </div>
      </div>
    </div>
  </>
);

export default Home;
