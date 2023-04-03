import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register/index';
import { ProtectedRoutes } from './ProtectedRoutes';
import HomePage from '../pages/Home';

const RoutePages = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default RoutePages;
