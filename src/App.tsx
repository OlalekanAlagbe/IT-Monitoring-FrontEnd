

import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import "./styles/global.css";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import UserLog from "./pages/UserLog/UserLog";
import Monitoring from "./pages/Monitoring/Monitoring";
import Alert from "./pages/Alert/Alert";
import NewUser from "./pages/NewUser/NewUser";
import Settings from "./pages/Settings/Settings";
import Network from "./pages/Network/Network";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  const isAuthenticated = localStorage.getItem("token"); // Example: Check authentication status

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },
    {
      element: <ProtectedRoute><Layout /></ProtectedRoute>, // Protect all nested routes
      children: [
        {
          path: "/",
          element: <Monitoring />,
        },
        {
          path: "/analytics",
          element: <Products />,
        },
        {
          path: "/networks",
          element: <Network />,
        },
        {
          path: "/user-logs",
          element: <UserLog />,
        },
        {
          path: "/summary",
          element: <Home />,
        },
        {
          path: "/alerts",
          element: <Alert />
        },
        {
          path: "/new-user",
          element: <NewUser />
        },
        {
          path: "/settings",
          element: <Settings />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
