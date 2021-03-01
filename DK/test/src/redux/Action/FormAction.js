// constant action
import {userAction} from "../Constant/Constant";
export const userActions = {
 addUser,
 getUsers,
 editSingleUser
}

//  sending data with action type
function addUser(details) {
 return dispatch => {
 dispatch(success(details));
 };
 function success(details) { return { type: userAction.USER_DATA, details } }
}

//  get users data
function getUsers(details) {
    return dispatch => {
        console.log(details)
    dispatch(success(details));
    };
    function success(details) { return { type: userAction.GET_USER_DATA, details } }
   }
function editSingleUser(Details) {
    return dispatch => {
        // console.log(details)
    dispatch(success(Details));
    };
    function success(Details) { return { type: userAction.EDIT_SINGLE_USER, Details } }
   }