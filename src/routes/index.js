import { useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';

import LandingPage from '../pages/LandingPage';
import TraitPage from '../pages/TraitPage';
import TermPage from '../pages/TermPage';

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/trait', element: <TraitPage /> },
        { path: '/terms', element: <TermPage /> },
        // { path: '/mint', element: <Mint /> }
      ]
    }
  ]);
}
