import Card from 'src/components/card/Card.tsx';
import Header from 'src/pages/home/Header.tsx';

export default function Home() {
  return (
    <div className="flex-col mx-32">
      <Header />
      <div className="grid grid-cols-3 gap-8 my-8">
        {[...Array(10).keys()].map((element) => (
          <Card key={element} />
        ))}
      </div>
    </div>
  );
}
