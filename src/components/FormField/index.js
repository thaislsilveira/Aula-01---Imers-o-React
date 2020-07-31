import React from 'react';
import PropTypes from 'prop-types';
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
    },
  },
}));

function FormField({
  label,
  type,
  name,
  value,
  onChange,
  multiline,
  rows,
  select,
  children,
}) {
  const classes = useStyles();
  const fieldId = `id_${name}`;

  return (
    <>
      <TextField
        id={fieldId}
        className={classes.root}
        label={label}
        multiline={multiline}
        rows={rows}
        type={type}
        value={value}
        name={name}
        variant="filled"
        onChange={onChange}
        select={select}
      >
        {children}
      </TextField>
    </>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  multiline: '',
  onChange: () => {},
  rows: {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  multiline: PropTypes.string,
  rows: PropTypes.number,
};

export default FormField;
