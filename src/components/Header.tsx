import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <div className="text-2xl text-left ml-5">
      <Link href="/">
        DigitalCanvas
      </Link>
    </div>
  );
};