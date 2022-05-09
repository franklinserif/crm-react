import { Outlet } from 'react-router-dom';

/**
 * Layout component for / route
 * @returns {JSX.Element} <InitSession/>
 */
const InitSession = () => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};

export default InitSession;
