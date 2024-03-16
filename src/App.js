import React from 'react';
import RoutesApp from './routes/routes';

import GlobalStyle from "./styles/global";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={'3000'} />
      <RoutesApp />
    </>

  );
}

export default App;
