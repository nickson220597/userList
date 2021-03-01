// importing react
import React from 'react'
// material ui
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

function IconButtonsEdit(props) {
  return (
    <div>
        <IconButton onClick={props.onclick} >
            <EditIcon />
        </IconButton>
      
    </div>
  )
}

export default IconButtonsEdit