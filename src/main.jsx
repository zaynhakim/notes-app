import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom";
import Layout from "./components/layout";
import "./index.css";
import Edit, {
  action as editAction,
  loader as editLoader
} from "./routes/edit";
import Home, {
  loader as homeLoader,
  action as homeAction
} from "./routes/home";
import Note, { loader as noteLoader } from "./routes/note";
import { action as destroyAction } from "./routes/destroy";
import Root from "./routes/root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<Layout />}>
        <Route
          index
          element={<Home />}
          loader={homeLoader}
          action={homeAction}
        />
        <Route path="notes/:noteId" element={<Note />} loader={noteLoader} />
        <Route
          path="notes/:noteId/edit"
          element={<Edit />}
          loader={editLoader}
          action={editAction}
        />
        <Route path="notes/:noteId/destroy" action={destroyAction} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
