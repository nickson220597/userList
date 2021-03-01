// importing react
import React from 'react'
// material ui
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function IconButtons(props) {
  return (
    <div>
        <IconButton onClick={props.onclick} >
            <DeleteIcon />
        </IconButton>
      
    </div>
  )
}

export default IconButtons













