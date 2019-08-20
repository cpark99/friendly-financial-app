import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTopOnMount from './ScrollToTopOnMount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ScrollToTopOnMount />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
