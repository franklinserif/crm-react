import { Outlet } from 'react-router-dom';

/**
 * Layout for /Clients routes
 * @returns {JSX.Element} <Layout/>
 */
const Layout = () => {
  return (
    <div class="md:flex md:min-h-screen">
      <div class="md:w-1/2 ">w-1/2</div>
      <div class="md:w-1/2">w-1/2</div>
    </div>
  );
};

export default Layout;
