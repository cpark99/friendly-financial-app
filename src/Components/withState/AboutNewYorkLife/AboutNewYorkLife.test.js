import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AboutNewYorkLife from './AboutNewYorkLife';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AboutNewYorkLife />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
