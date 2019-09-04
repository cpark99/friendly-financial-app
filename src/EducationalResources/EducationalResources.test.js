import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EducationalResources from './EducationalResources';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <EducationalResources />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
