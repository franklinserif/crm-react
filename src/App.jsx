import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitSession from './layout/InitSession';
import Layout from './layout/Layout';
import Index from './pages/Index';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitSession />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
