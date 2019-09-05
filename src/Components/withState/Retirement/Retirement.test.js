import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Retirement from './Retirement';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Retirement />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
