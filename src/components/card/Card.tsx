import { ReactNode } from 'react';

type CardProps = Readonly<{
  children: ReactNode;
}>;

export function Card({ children }: CardProps) {
  return <div className="flex flex-col justify-center gap-4">{children}</div>;
}

type CardImageProps = Readonly<{ image: string }>;

Card.Image = function Image({ image }: CardImageProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-lg" src={image} alt="" />
    </div>
  );
};

Card.Title = function Title({ children }: CardProps) {
  return (
    <div className="font-normal text-gray-700 dark:text-gray-400">
      {children}
    </div>
  );
};
