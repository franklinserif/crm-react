import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitSession from './layout/InitSession';
import Layout from './layout/Layout';
import Index from './pages/Index';
import LoginForm from './pages/LoginForm';
import NewClient from './pages/NewClient';
import EditClient from './pages/EditClient';

/**
 * It will manage all the rounting of the app
 * @returns {JSX.Element} <App/>
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** All /Clientes routes */}
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="nuevo" element={<NewClient />} />
          <Route path="path" element={<EditClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
