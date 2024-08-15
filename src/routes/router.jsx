import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Jobs from "../components/Jobs";
import Browse from "../components/Browse";
import Profile from "../components/Profile";
import JobDescription from "../components/JobDescription";
import ProtectedRoute from "./ProtectedRoute";
import Companies from "@/components/admin/Companies";
import CompanyCreate from "@/components/admin/CompanyCreate";
import CompanySetup from "@/components/admin/CompanySetup";

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

  // Admin Routes
  {
    path: "admin/companies",
    element: <Companies />,
  },
  {
    path: "admin/companies/create",
    element: <CompanyCreate />,
  },
  {
    path: "admin/companies/:id",
    element: <CompanySetup />,
  },
]);
