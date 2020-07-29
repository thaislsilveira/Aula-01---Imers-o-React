import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: '#53585d',
    },
    '& .MuiInputBase-input[type="color"]': {
      height: '40px',
    },
    '& textarea.MuiInputBase-input': {
      border: 'none',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& > *': {
      margin: theme.spacing(1),
      color: '#fff',
      // background: '#53585d',
    },
  },
}));

function FormField({ label, type, name, value, onChange, multiline, rows }) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      label={label}
      multiline={multiline}
      rows={rows}
      type={type}
      value={value}
      name={name}
      variant="filled"
      onChange={onChange}
    />
  );
}

export default FormField;
