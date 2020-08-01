import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }
  function setValues(values) {
    setValores({
      ...values,
    });
  }

  function handleChange(e) {
    setValue(e.target.name, e.target.value);
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    clearForm,
    handleChange,
    setValues,
  };
}

export default useForm;
