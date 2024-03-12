import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import NotFound from "./components/404.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<>users</>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
