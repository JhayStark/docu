import Layout from "@/components/Layout";
import { AuthProvider } from "@/context/AuthProvider";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const checkUserPath = pathname.includes("/auth");
  return (
    <AuthProvider>
      {!checkUserPath ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}
