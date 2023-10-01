import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Eagle from "./pages/Eagle";
import Nuri from "./pages/Nuri";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Eagle />
  },
  {
    path: "/nuri",
    element: <Nuri />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);