import React from 'react';
import RoutesApp from './routes/routes';

import GlobalStyle from "./styles/global";

function App() {
  // https://api.github.com
  return (
    <>
      <GlobalStyle />
      <RoutesApp />
    </>

  );
}

export default App;
