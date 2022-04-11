import React from 'react';
import useSWR from 'swr';

import checkLogin from '../../lib/utils/checkLogin';
import storage from '../../lib/utils/storage';

import Maybe from './Maybe';

const Navbar = () => {
  const { data: currentUser } = useSWR('user', storage);
  const isLoggedIn = checkLogin(currentUser);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Maybe test={isLoggedIn}>
            test maybe component
        </Maybe>
      </div>
    </nav>
  );
};

export default Navbar;
