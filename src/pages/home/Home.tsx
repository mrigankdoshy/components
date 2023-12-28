import Components from 'src/pages/home/Components.tsx';
import Header from 'src/pages/home/Header.tsx';

export default function Home() {
  return (
    <div className="flex-col mx-32">
      <Header />
      <Components />
    </div>
  );
}
