import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LifeInsurance from './LifeInsurance';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LifeInsurance />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
