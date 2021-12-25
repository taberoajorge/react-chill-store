import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import GlobalStyles from '../GlobalStyles';

const App = function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default App;
