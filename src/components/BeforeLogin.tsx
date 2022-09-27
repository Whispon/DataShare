import React from 'react';
import Link from 'next/link';

export const BeforeLogin: React.FC = () => {
  return (
    <div className="flex item-center justify-center w-screen h-screen">
      {/* container */}
      <div className="flex flex-col ... item-center justify-center">
        <h1 className='text-2xl mb-2'>欲しいフィギュアをプリンタしよう。</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link href="/api/auth/login">ログインする</Link></button>
      </div>
    </div>
  )
}