import { Formik, Form as FormFormik, Field } from 'formik';

const Form = () => {
  console.log('');
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
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
      >
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
          </div>
          <input
            type="submit"
            value="Agregar clientes"
            className="mt-5 w-full bg-blue-500 p-3 text-white uppercase hover:bg-blue-600 transition cursor-pointer"
          />
        </FormFormik>
      </Formik>
    </div>
  );
};

export default Form;
