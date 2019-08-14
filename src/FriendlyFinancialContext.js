import React from 'react'

export const nullProfile = {
  tags: [],
}

const ProfileContext = React.createContext({
  profile: nullProfile,
  error: null,
  setError: () => {},
  clearError: () => { },
  setProfile: () => {},
  clearProfile: () => {}
})

export default ProfileContext

// export class ProfileProvider extends Component {
//   state = {
//     profile: nullProfile,
//     error: null,
//   };

//   setError = error => {
//     console.error(error)
//     this.setState({ error })
//   }

//   clearError = () => {
//     this.setState({ error: null })
//   }

//   setProfile = profile => {
//     this.setState({ profile })
//   }

//   clearProfile = () => {
//     this.setProfile(nullProfile)
//   }

//   render() {
//     const value = {
//       profile: this.state.profile,
//       error: this.state.error,
//       setError: this.setError,
//       clearError: this.clearError,
//       setProfile: this.setProfile,
//       clearProfile: this.clearProfile,
//     }
//     return (
//       <ProfileContext.Provider value={value}>
//         {this.props.children}
//       </ProfileContext.Provider>
//     )
//   }
// }

// const FriendlyFinancialContext = React.createContext({
//   loggedIn: null,
//   credentials: [],
//   addNewUser: () => {},
//   updateLifeInsuranceGoal: () => {}
// });

// export default FriendlyFinancialContext;
