import React from 'react';
import ReactDOM from 'react-dom';
import ContactInfo from './ContactInfo';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(<ContactInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
