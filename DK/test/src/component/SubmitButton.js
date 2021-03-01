// react
import React from 'react'
// material ui
import { Button } from '@material-ui/core'

function SubmitButton(props) {
  return (
    <Button variant="contained" color="primary" onClick={props.onclick} >{props.value}</Button>
  )
}
// export button
export default SubmitButton
