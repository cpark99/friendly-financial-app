import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './SignUp';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const props = {
    history: {
      location: {
        pathname: '/'
      }
    }
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SignUp {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
