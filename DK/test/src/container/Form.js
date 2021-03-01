// react
import React, { useEffect, useState } from 'react'
// input component
import TextInput from '../component/TextInput'
import SubmitButton from '../component/SubmitButton'
// material ui
import { Grid, Paper } from '@material-ui/core'
// redux
import { useDispatch, useSelector } from "react-redux"
// user action
import { userActions } from "../redux/Action/FormAction"
// Axios
import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';
let idValue = 1

function Form() {
  const { editusers: { initialStates } } = useSelector(state => state);
  console.log(initialStates)
  // console.log(initialStates[0].firstName)
  let currentUser = {
    firstName: '',
    lastName: '',
    mail_id: '',
    id: ''
  };

  console.log(' state here 1 ', initialStates)
  if (initialStates && initialStates[0]) {
    currentUser = initialStates[0];
  }

  console.log('currentUser ', currentUser)

  let [detials, setDetails] = useState({});

  useEffect(()=>{
    if(initialStates)
      setDetails(initialStates[0])
  },[initialStates])

  // call useDispatch
  const dispatch = useDispatch()
  // post method to add user
  const adddata = () => {
    dispatch(userActions.addUser(detials));
    axios.post('http://localhost:3013/addusers', detials)
      .then(function (response) {
        console.log(response.data);
        // dispatch(userActions.getUsers(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
    idValue = idValue + 1;
    setDetails({ ...detials, id: idValue })
  }
  // getting user data from data database
  const getdata = () => {
    dispatch(userActions.addUser(detials));
    axios.get('http://localhost:3013/getuserlist')
      .then(function (response) {
        dispatch(userActions.getUsers(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  // delete all data
  const deletedata = () => {
    axios.delete('http://localhost:3013/getuserlist/deleteall')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  console.log('details', detials);

  return (
    <div>
      <form>
        <Paper>
          <Grid container sm={2}></Grid>
          <Grid container spacing={3}>
            <Grid item>
              <TextInput placeholder="Enter first name" className="textinput" value={detials.firstName} input={value => {setDetails({ ...detials, firstName: value }) }} />
            </Grid>
            <Grid item>
              <TextInput placeholder="Enter last name" className="textinput" value={detials.lastName} input={value => { (detials.lastName !== value ) && setDetails({ ...detials, lastName: value }) }} />
            </Grid>
            <Grid item>
              <TextInput placeholder="Enter mail id" className="textinput" value={detials.mail_id} input={value => { (detials.mail_id !== value ) && setDetails({ ...detials, mail_id: value }) }} />
            </Grid>
            <Grid item >
              <SubmitButton value="SUBMIT" onclick={adddata} />
            </Grid>
            <Grid item >
              <SubmitButton value="USER LIST" onclick={getdata} />
            </Grid>
            <Grid item >
              <SubmitButton value="DELETE ALL" onclick={deletedata} />
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  )
}

export default Form
