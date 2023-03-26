import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Router Component
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="category" element={<Categories />}>
        <Route path=":catName" element={<Products />} />
      </Route>
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
