import React from "react";
import Greeting from "./Greeting"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Greeting />} />
    )
  );

  return <RouterProvider router={router} />
}

export default App;
