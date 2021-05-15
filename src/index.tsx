import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

import App from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => ([
      {
        id: 1,
        title: 'transaction 1',
        amount: 400,
        type: 'income',
        category: 'Food',
        createdAt: new Date(),
      }
    ]));
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
