import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "src/pages/Home/index.tsx";
import About from "src/pages/About/index.tsx";
import "./index.css";
import Blog from "./pages/Blog";
import PostDetail from "./pages/Blog/PostDetail";
import { BlogProvider } from "./pages/Blog/BlogContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:title",
    element: <PostDetail />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  </React.StrictMode>
);
