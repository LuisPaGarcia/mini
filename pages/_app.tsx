import "../css/index.css";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>mini | template</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
