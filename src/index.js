import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import GlobalStyle from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    < AppRoutes />
    < GlobalStyle />
  </>
);
