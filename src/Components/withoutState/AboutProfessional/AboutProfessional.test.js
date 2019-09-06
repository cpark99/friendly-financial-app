import React from 'react';
import ReactDOM from 'react-dom';
import AboutProfessional from './AboutProfessional';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();
  
  const div = document.createElement('div');
  ReactDOM.render(
    <AboutProfessional />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
