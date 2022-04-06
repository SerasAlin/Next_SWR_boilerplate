import React from 'react';

import ArticleList from '../article/ArticleList';

import TabList from './TabList';

const MainView = () => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <TabList />
    </div>
    <ArticleList />
  </div>
);

export default MainView;
