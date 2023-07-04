import { AuthProvider } from '@/context/AuthProvider';
import '@/styles/globals.css';
import ProtectedRoutes from '@/components/ProtectedRoutes';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectedRoutes>
        <Component {...pageProps} />
      </ProtectedRoutes>
    </AuthProvider>
  );
}
