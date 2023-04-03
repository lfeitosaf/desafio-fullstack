import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserContext } from '../../hooks/userUserContext';
import Loading from '../../components/Loading';

export const ProtectedRoutes = () => {
  const location = useLocation();
  const { user, loading } = useUserContext();

  if (loading) {
    return <Loading />;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace state={{ from: location }} />
  );
};
