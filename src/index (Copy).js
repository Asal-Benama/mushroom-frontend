import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import TracePage from "./TracePage";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/trace/:batchId", element: <TracePage /> },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

