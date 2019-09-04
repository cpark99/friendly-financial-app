import React from 'react';
import ReactDOM from 'react-dom';
import LifeCalcResults from './LifeCalcResults';

it('renders without crashing', () => {
  const props = {
    name: {
      value: "name"
    }
  };
  const div = document.createElement('div');
  ReactDOM.render(
      <LifeCalcResults {...props}/>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
