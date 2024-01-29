import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import AdminDashBoard from "./pages/AdminPage/AdminDashBoard.jsx";
import "./index.css";
import AdminLogIn from "./pages/Admin/AdminLogIn.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Writers from "./pages/AdminPage/DBRightSection/Writers/Writers.jsx";


const router = createBrowserRouter([

  { path: "/", element: <AdminLogIn />, errorElement: <ErrorPage /> },
  // {
  //   path: "/admin/login",
  //   element: <AdminLogIn />,
  //   errorElement: <ErrorPage />,
  // },

  {
    path: "/admin/*",
    element: <AdminDashBoard />,
    errorElement: <ErrorPage />,}, 

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
