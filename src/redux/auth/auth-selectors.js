const getAuntheticated = state => state.auth.isAuntheticated;

const getUserEmail = state => state.auth.user.email;

const getUserName = state => state.auth.user.name;

const authSelectors = {
  getAuntheticated,
  getUserEmail,
  getUserName
}

export default authSelectors;