import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FinancialTools from './FinancialTools';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <FinancialTools />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
