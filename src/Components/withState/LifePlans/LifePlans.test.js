import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LifePlans from './LifePlans';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LifePlans />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
