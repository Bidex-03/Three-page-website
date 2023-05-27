import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/About", element: <AboutPage /> },
      { path: "/Contact", element: <ContactPage /> },
      // {path: "/Error", element: <ErrorPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
