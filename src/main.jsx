import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./routes/Homepage";
import NavMenu from "./routes/NavMenu";
import Settings from "./routes/Settings";
import Profile from "./routes/Profile";
import Main from "./routes/Main";
import Root from "./routes/Root";

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //root
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
      {
        path: "profile",
        element: <Profile/>
      },
      {
        path: "main",
        element: <Main/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
