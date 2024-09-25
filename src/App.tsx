import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRouter from './routers/PrivateRouter';
import Home from './pages/Home';
import NotFound from './pages/error/NotFound';
import RedirectRoot from './components/RedirectRoot';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Games from './pages/Games';
import Slots from './pages/Slots';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectRoot />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={
          <PrivateRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/slots" element={<Slots />} />
            </Routes>
          </PrivateRouter>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;