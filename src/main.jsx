import { createRoot } from 'react-dom/client'
import Root from './Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
          index: true,
          element: <Home />,
      },
      {
          path: 'shop',
          element: <Shop />,
      },
      {
          path: 'cart',
          element: <Cart />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
