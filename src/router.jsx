import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
