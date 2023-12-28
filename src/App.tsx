import { Spotlight } from 'src/components/spotlight/Spotlight.tsx';
import { Home } from 'src/pages/home/Home.tsx';

export function App() {
  return (
    <Spotlight>
      <Home />
    </Spotlight>
  );
}
