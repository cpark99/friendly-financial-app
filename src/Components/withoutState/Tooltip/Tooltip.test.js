import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';

it('renders without crashing', () => {
  const props = {
    children: "",
    message: "message"
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <Tooltip {...props} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
