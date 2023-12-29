import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Spotlight } from 'src/components/spotlight/Spotlight.tsx';
import { CardDetails } from 'src/pages/details/CardDetails.tsx';
import { Home } from 'src/pages/home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/card',
    element: <CardDetails />,
  },
]);

export function App() {
  return (
    <Spotlight>
      <RouterProvider router={router} />
    </Spotlight>
  );
}
