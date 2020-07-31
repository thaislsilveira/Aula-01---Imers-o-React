import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    clearForm,
    handleChange,
  };
}

export default useForm;
