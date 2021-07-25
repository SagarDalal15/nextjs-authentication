import { Provider } from "next-auth/client";

import Layout from "../components/layout/layout";
import "../styles/globals.css";
import GithubLink from "../components/github-link";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
        <GithubLink />
      </Layout>
    </Provider>
  );
}

export default MyApp;
