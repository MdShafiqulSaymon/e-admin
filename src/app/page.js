import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Dashboard/>
    </Layout>
  );
}

export default MyApp;
