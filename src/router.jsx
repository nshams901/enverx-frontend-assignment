import { createBrowserRouter } from "react-router-dom";
import SideNav from "./layout/SideNav";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SideNav/>,
    //   errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Dashboard/>},
        {
            path: 'wallet',
            element: <Wallet/>
        },
        {
          path: "*",
          element: <Dashboard />,
        },
      ],
    },
  ]);