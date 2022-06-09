import * as yup from "yup";
export const registerValidator = yup.object().shape({
  name: yup.string().required("Обязательное поле"),
  login: yup
    .string()
    .min(4, "Слишком короткий логин")
    .required("Обязательное поле"),
  password: yup
    .string()
    .min(6, "Слишком короткий пароль")
    .required("Обязательное поле"),
});
