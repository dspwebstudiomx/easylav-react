export const validateUserInput = (values) => {
  let errors = {};

  if (!values.user_name) {
    errors.user_name = "Solo debe de contener letras";
  } else if (values.user_name.length < 2) {
    errors.user_name = "Ingrese al menos 2 letras";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
    errors.user_name = "No debe de contener números";
  } else {
    errors.user_name = "Nombre Correcto";
  }

  // Add similar validation for other fields as needed

  return errors;
};
