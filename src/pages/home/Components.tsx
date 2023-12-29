import { Link } from 'react-router-dom';
import { Card } from 'src/components/card/Card.tsx';
import { COMPONENTS } from 'src/pages/home/shared.ts';

export function Components() {
  return (
    <div className="grid grid-cols-3 gap-8 my-8">
      {COMPONENTS.map(({ id, title, subtitle, image }) => (
        <Link key={id} to={`/${id}`}>
          <Card>
            <Card.Image image={image} />
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
          </Card>
        </Link>
      ))}
    </div>
  );
}
