import React from 'react';
import ReactDOM from 'react-dom';
import LifeInsuranceCalc from './LifeInsuranceCalc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <LifeInsuranceCalc />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
