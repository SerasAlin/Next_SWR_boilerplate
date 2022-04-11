import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutPropsType {
  children: any
}

const Layout = ({ children }: LayoutPropsType) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
