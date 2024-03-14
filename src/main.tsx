import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import NotFound from "./components/404.tsx";
import Users from "./components/Users.tsx";
import { UsersContextProvider } from "./lib/context/UsersContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </UsersContextProvider>
  </React.StrictMode>
);
