import ROUTES from 'constants/routes';
import { ChatPage, HomePage, NotFoundPage } from 'pages';
import { RouteObject, useRoutes } from 'react-router-dom';

const Router = (): React.ReactElement | null => {
  const routes: RouteObject[] = [
    {
      path: '*',
      element: <NotFoundPage />
    },
    {
      path: ROUTES.HOME,
      element: <HomePage />
    },
    {
      path: ROUTES.CHAT,
      element: <ChatPage />
    }
  ];

  return useRoutes(routes);
};

export default Router;
