// importing table container
import BasicTable from './container/Table';
import './App.css';
// react
import React from "react"
// form container
import Form from './container/Form';
import { Grid } from '@material-ui/core';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <React.Fragment >
      <Grid className="App" container >
        <Grid item sm={2}></Grid>
      <Grid item sm={8}>
        <Form />
        <BasicTable></BasicTable>
      </Grid>
      <Grid item sm={2}></Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
