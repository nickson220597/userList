// redux
import { combineReducers } from 'redux';
// user data
import users from '../Reducer/MainRedux';
// edit user
import editusers from '../Reducer/EditUserRedux'
export default combineReducers({
 users,
 editusers
})