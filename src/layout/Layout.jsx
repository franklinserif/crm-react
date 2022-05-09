import { Outlet } from 'react-router-dom';

/**
 * Layout for /Clients routes
 * @returns {JSX.Element} <Layout/>
 */
const Layout = () => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};

export default Layout;
