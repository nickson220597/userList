// action constant
import { userActions } from '../Action/FormAction';
import { userAction } from '../Constant/Constant';
const initialState = [];

export default function users(state = initialState, action) {
 switch (action.type) {
 
 case userAction.USER_DATA:
 return {
     ...state,
 ...action.data
 };

 case userAction.GET_USER_DATA:
     console.log(action.details)
     return {
         initialState: action.details
     }

 default: {
 return state;
 }
 }

}