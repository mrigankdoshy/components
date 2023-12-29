import { ReactNode } from 'react';

type CardProps = Readonly<{
  children: ReactNode;
}>;

export function Card({ children }: CardProps) {
  return (
    <div className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
    <h5 className="mx-5 mt-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
