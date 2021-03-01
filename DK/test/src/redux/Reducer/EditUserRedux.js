// action constant
import { userAction } from '../Constant/Constant';
const initialStates = [];

export default function editusers(state =initialStates, action) {
 switch (action.type) {
 

case userAction.EDIT_SINGLE_USER:
    console.log("edituser")
    return {
        initialStates: action.Details
    }
 default: {
 return state;
 }
 }

}