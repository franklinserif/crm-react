import Form from '../components/Form';

/**
 * New Client page
 * @returns {JSX.Element} <NewClient/>
 */
const NewClient = () => {
  return (
    <>
      <h1 className="text-3xl text-blue-400 font-black ">Nuevo Cliente</h1>
      <p className="mt-3 text-gray-500">
        Llena todos los siguientes campos para registrar un cliente
      </p>

      <Form />
    </>
  );
};

export default NewClient;
