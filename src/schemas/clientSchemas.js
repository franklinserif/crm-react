import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const name = Yup.string()
  .min(3, 'El nombre es muy corto')
  .max(40, 'El nombre es muy largo');
const company = Yup.string();
const email = Yup.string().email();
const phone = Yup.string().matches(
  phoneRegExp,
  'Necesita escribir un numero valido',
);
const note = Yup.string();

const newClientSchema = Yup.object().shape({
  name: name.required('El nombre es obligatorio'),
  company: company.required('La empresa es obligatorioa'),
  email: email.required('Escriba un email valido'),
  phone: phone.required('Escrib un número de teléfono valido'),
  note: note,
});

export { newClientSchema };
