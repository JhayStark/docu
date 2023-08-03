import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthProvider';

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const { intializing, isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (!intializing) {
      if (!isAuthenticated && !router.pathname.includes('auth')) {
        router.push('/auth/login');
      }
    }
  }, [intializing, isAuthenticated, router]);
  if (intializing) return <h2>Application loading</h2>;
  if (!intializing && !isAuthenticated) return <>{children}</>;
  if (!intializing && isAuthenticated) return <>{children}</>;
  return null;
};

export default ProtectedRoutes;
