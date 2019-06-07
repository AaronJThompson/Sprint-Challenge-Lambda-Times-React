import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import withAuthentication from './authentication/withAuthentication';
import Login from './components/Login'

const ContentWithAuthentication = withAuthentication(Content, Login);
const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ContentWithAuthentication />
    </div>
  );
}

export default App;
