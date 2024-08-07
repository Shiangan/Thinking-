import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
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
  );
}
