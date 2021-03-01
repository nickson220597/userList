import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

function SearchTextInput(props) {
  return (
    <div>
        {/* <Autocomplete
    //   id={props.Id}
      options={props.Options}
      style={{ width: 300 }}
      getOptionLabel={props.GetOptionLabel}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          /> */}
    </div>
  )
}

export default SearchTextInput;