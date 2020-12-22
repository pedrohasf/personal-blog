import { AppProps } from "next/dist/next-server/lib/router/router";
import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        title="Pedro Fernandes"
        description="Weekly articles about all things related to web development and design."
      />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        transition={Slide}
      />
    </>
  );
}

export default MyApp;
