import * as yup from "yup";
export const loginValidator = yup.object().shape({
  login: yup
    .string()
    .min(4, "Слишком короткий логин")
    .required("Обязательное поле"),
  password: yup
    .string()
    .min(6, "Слишком короткий пароль")
    .required("Обязательное поле"),
});
