import { ReactNode } from 'react';

type CardProps = Readonly<{
  children: ReactNode;
}>;

export function Card({ children }: CardProps) {
  return (
    <div className="block max-w-sm rounded-lg shadow bg-white border dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100  dark:hover:bg-gray-700 transform transition duration-500 hover:scale-105">
      {children}
    </div>
  );
}

type CardImageProps = Readonly<{ image: string }>;

Card.Image = function Image({ image }: CardImageProps) {
  return <img className="rounded-t-lg" src={image} alt="" />;
};

Card.Title = function Title({ children }: CardProps) {
  return (
    <h5 className="mx-5 mt-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
};

Card.Subtitle = function Subtitle({ children }: CardProps) {
  return (
    <p className="mx-5 mb-5 font-normal text-gray-700 dark:text-gray-400">
      {children}
    </p>
  );
};
