import { Card } from 'src/components/card/Card.tsx';

export function Components() {
  return (
    <div className="grid grid-cols-3 gap-8 my-8">
      {[...Array(15).keys()].map((element) => (
        <Card key={element} linkTo="">
          <Card.Title>Component Title</Card.Title>
          <Card.Subtitle>Short description of component</Card.Subtitle>
        </Card>
      ))}
    </div>
  );
}
