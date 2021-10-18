import Head from "next/head";
import { AppProps } from "../../types";

const Layout = ({ children }: AppProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Ip address tracker created with NextJs"
        />
        <meta
          name="viewport"
          content="minimizw-scale-1 width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
