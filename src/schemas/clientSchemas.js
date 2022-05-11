import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const name = Yup.string();
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
  phone: phone.required(),
  note: note.required('La nota es obligatoria'),
});

export { newClientSchema };
