import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MainIndexs,
  LoginPage,
  RegisterPage,
  Homepages,
  AboutPage,
} from "./utils/Pages";

const App: React.FC = () => {
  const createRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainIndexs />,
      children: [
        {
          index: true,
          element: <Homepages />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <div className="font-roboto">
      <RouterProvider router={createRoutes} />
    </div>
  );
};

export default App;
