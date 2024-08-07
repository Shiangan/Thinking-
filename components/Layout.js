import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>雲端訃聞平台</title>
        <meta name="description" content="提供雲端訃聞和花籃訂購服務" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">首頁</Link></li>
            <li><Link href="/submit-obituary">提交訃聞</Link></li>
            <li><Link href="/order-flowers">訂購花籃</Link></li>
            <li><Link href="/admin">後台管理</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 雲端訃聞平台</p>
      </footer>
    </div>
  );
}
