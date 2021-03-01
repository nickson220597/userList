// import react
import React from 'react'
// material ui
import TextField from '@material-ui/core/TextField';

function TextInput(props) {
    console.log(props)
    const setInput=(e)=>props.input(e.target.value)
  return (
    <div>
      <TextField
    id="outlined-secondary"
    label={props.placeholder}
    variant="outlined"
    color="primary"
    onChange={setInput}
    className={props.className}
    value = {props.value}
  />
    </div>
  )
}

export default TextInput
