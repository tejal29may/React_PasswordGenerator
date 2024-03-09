import * as React from 'react';
import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert(props) {
  return (
    <Alert  severity="success" style={{width:"30%", margin:"2% auto"}}>
     {props.msg}
    </Alert>
  );
}