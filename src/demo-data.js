export default {
  users: [
    {
      id: "a123",
      email: "demo@test.com", //UNIQUE
      password: "password"
    }
  ],
  profiles: [
    {
      userId: "a123",
      name: "Chris Park",
      // email: "demo@test.com", // foreign key
      phone: "(818)800-7096",
      lifeInsuranceGoal: "500000",
      getEmail: true,
      getCall: true,
      newsletter: true
    }
  ]
  
}
