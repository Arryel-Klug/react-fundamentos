// const user = {};

// // optional chaining "console.log(user?.address?.street)";

// console.log(user?.address?.street);

import React from 'react';

import ReactDOM from 'react-dom';

import App from './components/App';

import GlobalStyle from './styles/global'

//Functional component e Class Component

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);