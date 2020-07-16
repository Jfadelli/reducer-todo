import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = (event) => {
    setValues(event.target.value);
  };

  return [values, setValues, handleChanges];
};