import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import deleteUserReducer from "./reducer";
import account from "./Components/Users/account";

//Action
//Delete User
// const deleteUser = () => {
//   return {
//     type: "DELETE",
//     payload: {
//       id: 1
//     }
//   }  
// }

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  account,
  form: formReducer
})


const store = createStore(rootReducer);

export default store;