import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitSession from './layout/InitSession';
import Layout from './layout/Layout';
import Index from './pages/Index';
import LoginForm from './pages/LoginForm';

/**
 * It will manage all the rounting of the app
 * @returns {JSX.Element} <App/>
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** All / routes */}
        <Route path="/" element={<InitSession />}>
          <Route index element={<LoginForm />} />
        </Route>
        {/** All /Clientes routes */}
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
