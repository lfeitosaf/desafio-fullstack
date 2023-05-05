import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserContext } from '../../hooks/userUserContext';

export const ProtectedRoutes = () => {
  const location = useLocation();
  const { user } = useUserContext();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace state={{ from: location }} />
  );
};
