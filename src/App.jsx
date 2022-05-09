import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitSession from './layout/InitSession';
import Layout from './layout/Layout';
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitSession />}></Route>
        <Route path="/clientes" element={<Layout />}>
          <Route element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
