import React from 'react';
import ReactDOM from 'react-dom';
import LifeInsuranceCalc from './LifeInsuranceCalc';

window.scrollTo = jest.fn();

it('renders without crashing', () => {
  window.scrollTo.mockClear();

  const div = document.createElement('div');
  ReactDOM.render(
      <LifeInsuranceCalc />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
