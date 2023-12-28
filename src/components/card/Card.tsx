/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode } from 'react';

type CardProps = Readonly<{
  children?: ReactNode;
}>;

export default function Card({ children }: CardProps) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Component Title
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Short description of component
      </p>
    </a>
  );
}
