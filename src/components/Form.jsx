import { Formik, Form as FormFormik, Field } from 'formik';
import * as Yup from 'yup';
import { newClientSchema } from '../schemas/clientSchemas';
import ErrorMessage from './ErrorMessage';

/**
 *  Will handle NewClientForm
 * @returns {JSX.Element} <Form />
 */
const Form = () => {
  /**
   *
   * @param {Object} values
   */
  const handleSubmit = (values) => {
    Yup.object().shape({
      ...values,
    });
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md md:w-3/4 mx-auto shadow-md">
      <h1 className="text-gray-500 font-bold text-xl uppercase text-center">
        Agregar Clientes
      </h1>
      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          phone: '',
          note: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => (
          <FormFormik className="mt-5">
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-600">
                Nombre
              </label>
              <Field
                name="name"
                id="name"
                type="text"
                placeholder="Nombre del cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              {errors.name && touched.name && (
                <ErrorMessage>{errors.name}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="text-gray-600">
                Empresa
              </label>
              <Field
                name="company"
                id="company"
                type="text"
                placeholder="Empresa del cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              {errors.company && touched.company && (
                <ErrorMessage>{errors.company}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Email del cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="text-gray-600">
                Teléfono
              </label>
              <Field
                name="phone"
                id="phone"
                type="text"
                placeholder="Teléfono del cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              {errors.phone && touched.phone && (
                <ErrorMessage>{errors.phone}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="note" className="text-gray-600">
                Notas
              </label>
              <Field
                name="note"
                as="textarea"
                id="note"
                type="text"
                placeholder="Notas del cliente"
                className="mt-2 block w-full p-3 bg-gray-50"
              />
              {errors.note && touched.note && (
                <ErrorMessage>{errors.note}</ErrorMessage>
              )}
            </div>
            <input
              type="submit"
              value="Agregar clientes"
              className="mt-5 w-full bg-blue-500 p-3 text-white uppercase hover:bg-blue-600 transition cursor-pointer"
            />
          </FormFormik>
        )}
      </Formik>
    </div>
  );
};

export default Form;
