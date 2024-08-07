import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>祥安生命有限公司</title>
        <meta name="description" content="祥安生命有限公司的雲端訃聞系統" />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
}
