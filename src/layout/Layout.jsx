import { Outlet, Link } from 'react-router-dom';

/**
 * Layout for /Clients routes
 * @returns {JSX.Element} <Layout/>
 */
const Layout = () => (
  <div className="md:flex md:min-h-screen">
    <div className="md:w-1/4 bg-gray-200 px-5 py-10">
      <h2 className="text-3xl text-center text-gray-500">CRM - Clientes</h2>
      <nav className="mt-10">
        <Link
          className="text-gray-600 text-1xl block uppercase mt-2 hover:text-gray-900 transition duration-150 ease-out hover:ease-in"
          to="/clientes"
        >
          Clientes
        </Link>
        <Link
          className="text-gray-600 text-1xl block uppercase mt-2 hover:text-gray-900 transition duration-150 ease-out hover:ease-in"
          to="/clientes/nuevo"
        >
          Nuevo Cliente
        </Link>
      </nav>
    </div>
    <div className="md:w-3/4">
      <Outlet />
    </div>
  </div>
);
export default Layout;
