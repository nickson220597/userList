// import TableCell from '../component/Tablecell'
import React, { useEffect, useState } from 'react';
// material ui style
import { makeStyles } from '@material-ui/core/styles';
// material ui component
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButtons from '../component/IconButtonsDelete'
import IconButtonsEdit from "../component/IconButtonsEdit"
// importing react-redux
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField } from '@material-ui/core';
import axios from 'axios';
// import search textfield
import Autocomplete from '@material-ui/lab/Autocomplete';
import SubmitButton from '../component/SubmitButton';
import { userActions } from '../redux/Action/FormAction';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  iconbutton: {
    display: "flex",
  }
});

export default function BasicTable() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const { users: { initialState } } = useSelector(state => state);
  const a = "";
  const deleteSingleUser = (id) => {
    axios.delete(`http://localhost:3013/getuserlist/delete/${id}`)
      .then(res => {
        console.log(res)
        axios.get('http://localhost:3013/getuserlist')
          .then(function (response) {
            dispatch(userActions.getUsers(response.data));
          })
          .catch(function (error) {
            console.log(error);
          })
      })
      .catch(err => console.log(err))
  }
  const editSingleUser = (id) => {
    axios.get(`http://localhost:3013/getuserlist/edit/${id}`)
      .then(res => {
        console.log(res)
        let newArr = initialState.filter(i => i._id == res.data._id)
        dispatch(userActions.editSingleUser(newArr));
        console.log(newArr)
          .catch(function (error) {
            console.log(error);
          })
      })
      .catch(err => console.log(err))
  }
  const searchUser = (value) => {

    if (value && value.firstName) {
      const id = value.firstName
      axios.get(`http://localhost:3013/searchUserlist/${id}`)
        .then(res => {
          console.log(res)
          // if()
          let newArr = initialState.filter(i => i._id == value._id)
          dispatch(userActions.getUsers(newArr));
        })
        .catch(err => console.log(err))
    } else {
      // get all
      axios.get('http://localhost:3013/getuserlist')
      .then(function (response) {
        dispatch(userActions.getUsers(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })


    }
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Mail id</TableCell>
            <TableCell align="right">Edit/Delete</TableCell>

          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right" className={classes.iconbutton}>
              <Autocomplete
                id="combo-box-demo"
                options={initialState}
                onChange={(event, value) => searchUser(value)}
                getOptionLabel={(option) => option.firstName}
                style={{ width: 200 }}
                renderInput={(params) =>
                  <TextField {...params} label="Search first name" variant="outlined" />
                }
              />
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {initialState && initialState.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.mail_id}</TableCell>
              <Grid item >
                <TableCell align="right" className={classes.iconbutton}>
                  <IconButtons onclick={() => deleteSingleUser(row._id)} ></IconButtons>
                  <IconButtonsEdit onclick={() => editSingleUser(row._id)} />
                </TableCell>
              </Grid>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );


}
