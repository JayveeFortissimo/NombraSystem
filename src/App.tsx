import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MainIndexs,
  LoginPage,
  RegisterPage,
  Homepages,
  AboutPage,
} from "./utils/Pages";
import AuthContext from "./providers/AuthContext";

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
    <div className="font-roboto backgroundHomepage">
      <AuthContext>
        <RouterProvider router={createRoutes} />
      </AuthContext>
    </div>
  );
};

export default App;
