import { ReactNode } from 'react';

type CardProps = Readonly<{
  linkTo: string;
  children: ReactNode;
}>;

export default function Card({ linkTo, children }: CardProps) {
  return (
    <a
      href={linkTo}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

Card.Title = function Title({ children }: { children: ReactNode }) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
};

Card.Subtitle = function Subtitle({ children }: { children: ReactNode }) {
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
  );
};
