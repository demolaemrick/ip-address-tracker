import type { NextPage } from "next";
import Layout from "../components/ui/Layout";
import Header from "../components/modules/Header";
import Info from "../components/modules/Info";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Info />
      </main>
    </Layout>
  );
};

export default Home;
