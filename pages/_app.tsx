import React from 'react';
import Layout from 'components/common/Layout';
import { appWithTranslation } from 'next-i18next'

interface MyAppPropsType {
  Component: any,
  pageProps: any
}

const MyApp = ({ Component, pageProps }: MyAppPropsType) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default appWithTranslation(MyApp);
