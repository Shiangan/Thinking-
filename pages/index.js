// pages/index.js
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="bg-gray-100 p-10 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center">歡迎來到祥安生命有限公司</h1>
        <div className="flex flex-col items-center">
          <Link href="/submit-obituary">
            <a className="btn btn-primary mb-4">提交訃聞</a>
          </Link>
          <Link href="/order-flowers">
            <a className="btn btn-primary mb-4">訂購花籃</a>
          </Link>
          <Link href="/admin">
            <a className="btn btn-secondary">後台管理</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>祥安生命有限公司</title>
      </Head>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/">
            <a className="text-white text-2xl">祥安生命有限公司</a>
          </Link>
          <div>
            <Link href="/submit-obituary">
              <a className="text-gray-300 hover:text-white ml-4">提交訃聞</a>
            </Link>
            <Link href="/order-flowers">
              <a className="text-gray-300 hover:text-white ml-4">訂購花籃</a>
            </Link>
            <Link href="/admin">
              <a className="text-gray-300 hover:text-white ml-4">後台管理</a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">{children}</div>
    </>
  );
}
