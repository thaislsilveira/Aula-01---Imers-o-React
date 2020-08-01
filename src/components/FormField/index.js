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
  required,
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
        required={required}
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
  select: '',
  children: '',
  required: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  multiline: PropTypes.string,
  rows: PropTypes.number,
  select: PropTypes.string,
  children: PropTypes.string,
  required: PropTypes.string,
};

export default FormField;
