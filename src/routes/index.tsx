import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register/index';
import { ProtectedRoutes } from './ProtectedRoutes';
import HomePage from '../pages/Home';
import EditModal from '../pages/EditContact';
import EditProfile from '../pages/EditProfile';

const RoutePages = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact/:id' element={<EditModal />} />
        <Route path='/profile' element={<EditProfile />} />
      </Route>
    </Routes>
  );
};

export default RoutePages;
