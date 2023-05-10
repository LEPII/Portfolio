import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import ErrorPage from "./components/ErrorPage";
import dotenv from "dotenv";
dotenv.config();

 const envVars = {
   emailKey: process.env.REACT_APP_EMAIL_KEY,
   tempKey: process.env.REACT_APP_TEMP,
   pubKey: process.env.REACT_APP_PUB,
 };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, },
      {
        path: "/contact",
        element: <Contact envVars={envVars} />,
      },  
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
