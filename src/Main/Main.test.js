import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

it('renders without crashing', () => {
  const props = {
    history: {
      location: {
        pathname: "/"
      }
    }
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Main {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
