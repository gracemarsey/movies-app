import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Header from './components/Header';
import HomePage from './pages/Home';
import MoviesPage from './pages/Movies';
import ShowsPage from './pages/Shows';
import FavouritesPage from './pages/Favourites';
import AboutPage from './pages/About';

// Create a root route
const rootRoute = createRootRoute({
  component: () => (
    <div style={{ minWidth: '100vw', minHeight: '100vh' }}>
      <Header />
      <Outlet /> {/* This is where nested routes will render */}
    </div>
  ),
});

const getParentRoute = () => rootRoute;

const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute, path: '/', component: HomePage }),
  createRoute({ getParentRoute, path: '/movies', component: MoviesPage }),
  createRoute({ getParentRoute, path: '/shows', component: ShowsPage }),
  createRoute({ getParentRoute, path: '/favourites', component: FavouritesPage }),
  createRoute({ getParentRoute, path: '/about', component: AboutPage }),
]);

export const router = createRouter({ routeTree });

// Register the router for type safety (important!)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
