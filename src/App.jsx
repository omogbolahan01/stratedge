import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Career from "./pages/Career";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/project" element={<Project />} />
      <Route path="/team" element={<Team />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
