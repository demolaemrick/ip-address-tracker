import type { NextPage, GetStaticProps } from "next";

import Layout from "../components/ui/Layout";
import Header from "../components/modules/Header";
import Info from "../components/modules/Info";

const Home: NextPage = ({ data }: any) => {
  return (
    <Layout>
      <Header />
      <main>
        <Info data={data} />
      </main>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=at_bAZzx5GQCnFyTVK25Qx5XXRyA2wxw"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Home;
