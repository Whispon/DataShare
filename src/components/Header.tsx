import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';

export const Header: React.FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return (
    <div className="h-10 border-b border-gray-300">
        <div className="text-2xl text-left ml-5">
          <div className='flex flex-row'>
            <Link href="/">
              Demiurge4D
            </Link>
            <div>Loading...</div>
          </div>
        </div>
      </div>
  );

  if (error) return (
    <div className="h-10 border-b border-gray-300">
        <div className="text-2xl text-left ml-5">
          <div className='flex flex-row'>
            <Link href="/">
              Demiurge4D
            </Link>
            <div>{error.message}</div>
          </div>
        </div>
      </div>
  );

  if (user) {
    return (
      <div className="h-10 border-b border-gray-300">
        <div className="text-2xl text-left ml-5">
          <div className='flex flex-row'>
            <Link href="/">
              Demiurge4D
            </Link>
            {user.name}!  <Link href="/api/auth/logout">Logout</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-10 border-b border-gray-300">
      <div className="text-2xl text-left ml-5">
        <div className='flex w-screen'>
          <Link href="/">
            Demiurge4D
          </Link>
          <div className="flex ml-auto mr-[100px]">
            <Link href="/api/auth/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};