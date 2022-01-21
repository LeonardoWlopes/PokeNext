import Head from "next/head";
import Footer from "../Footer";
import NavBar from "../NavBar";

interface props {
  children: React.ReactNode;
}

export default function Layout({ children }: props) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
