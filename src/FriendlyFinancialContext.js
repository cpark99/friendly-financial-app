import React from 'react';

const FriendlyFinancialContext = React.createContext({
  loggedIn: null,
  credentials: [],
  addNewUser: () => {},
  updateLifeInsuranceGoal: () => {}
});

export default FriendlyFinancialContext;
