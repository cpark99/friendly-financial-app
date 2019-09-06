import React from 'react';
import ReactDOM from 'react-dom';
import Headshot from './Headshot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Headshot />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
