import { Outlet, NavLink } from 'react-router-dom';

/**
 * Layout for /Clients routes
 * @returns {JSX.Element} <Layout/>
 */
const Layout = () => (
  <div className="md:flex md:min-h-screen">
    <div className="md:w-1/4 bg-gray-200 px-5 py-10">
      <h2 className="text-3xl text-center text-gray-500">
        Customer relationship managemen
      </h2>
      <nav className="mt-10">
        <NavLink
          // eslint-disable-next-line no-confusing-arrow
          className={
            ({ isActive }) =>
              // eslint-disable-next-line implicit-arrow-linebreak
              `${
                isActive
                  ? 'text-gray-900 text-1xl block uppercase mt-2 hover:text-gray-600 transition'
                  : 'text-gray-600 text-1xl block uppercase mt-2 hover:text-gray-900 transition'
              }`
            // eslint-disable-next-line react/jsx-curly-newline
          }
          to="/clientes"
        >
          Clientes
        </NavLink>
        <NavLink
          className={
            ({ isActive }) =>
              // eslint-disable-next-line implicit-arrow-linebreak
              `${
                isActive
                  ? 'text-gray-900 text-1xl block uppercase mt-2 hover:text-gray-600 transition'
                  : 'text-gray-600 text-1xl block uppercase mt-2 hover:text-gray-900 transition'
              }`
            // eslint-disable-next-line react/jsx-curly-newline
          }
          to="/clientes/nuevo"
        >
          Nuevo Cliente
        </NavLink>
      </nav>
    </div>
    <div className="md:w-3/4 p-10 shadow-md">
      <Outlet />
    </div>
  </div>
);
export default Layout;
