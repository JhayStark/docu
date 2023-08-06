import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthProvider';

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const { intializing, isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (!intializing) {
      if (
        !intializing &&
        !isAuthenticated &&
        !router.pathname.includes('auth')
      ) {
        router.replace('/auth/login');
      }
    }
  }, [intializing, isAuthenticated, router]);
  if (intializing) <h2>Application loading</h2>;
  if (!isAuthenticated && !router.pathname.includes('auth')) return null;
  return <>{children}</>;
};

export default ProtectedRoutes;
