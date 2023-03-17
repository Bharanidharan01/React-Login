
const IS_USER_LOGGED_IN = "isUserLoggedIn"

export const setLoginLocalStorageStateToActive = () => {
  window.localStorage.setItem(IS_USER_LOGGED_IN, 100);
}
export const setLoginLocalStorageStateToInActive = () => {
  window.localStorage.setItem(IS_USER_LOGGED_IN, -1);
}

export const isUserLoggedIn = () => {
  const state = window.localStorage.getItem(IS_USER_LOGGED_IN)
  console.log("localStorage state", state)
  return state == 100;
}
export const getLoggedInStrgValue = () => {
  const state = window.localStorage.getItem(IS_USER_LOGGED_IN)
  return state;
}  