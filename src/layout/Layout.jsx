import { Outlet } from 'react-router-dom';

/**
 * Layout for /Clients routes
 * @returns {JSX.Element} <Layout/>
 */
const Layout = () => {
  return (
    <div class="md:flex md:min-h-screen">
      <div class="md:w-1/4 ">1</div>
      <div class="md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
