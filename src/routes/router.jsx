import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Jobs from "../components/Jobs";
import Browse from "../components/Browse";
import Profile from "../components/Profile";
import JobDescription from "../components/JobDescription";
import ProtectedRoute from "./ProtectedRoute";

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
  {
    path: "jobs",
    element: <Jobs />,
  },
  {
    path: "description/:id",
    element: <JobDescription />,
  },
  {
    path: "browse",
    element: <Browse />,
  },
  {
    path: "profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);
