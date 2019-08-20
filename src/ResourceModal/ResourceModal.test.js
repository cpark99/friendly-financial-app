import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResourceModal from './ResourceModal';

it('renders without crashing', () => {
  const props = {
    title: "title",
    src: "src"
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ResourceModal {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
