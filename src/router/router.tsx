import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout children={undefined} />,
      // children: [
      //   { path: '/kontakt', element: <Contact /> },
      //   // ...
      // ],
    },
  ],
  {
    basename: '/kodON_website',
  }
);
