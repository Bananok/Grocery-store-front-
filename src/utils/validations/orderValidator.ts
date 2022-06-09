import * as yup from "yup";
export const orderValidator = yup.object().shape({
  phone: yup
    .string()
    .min(6, "Слишком короткий номер")
    .required("Обязательное поле"),
  adress: yup
    .string()
    .min(6, "Слишком короткий адрес")
    .required("Обязательное поле"),
});
