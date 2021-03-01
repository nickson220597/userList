// material_ui tablecell
import TableCell from '@material-ui/core/TableCell';
// react
import React from 'react'

function Tablecells(props) {
  return (
    <div>
      <TableCell align="right">{props.input}</TableCell>
    </div>
  )
}

export default Tablecells
