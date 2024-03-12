import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-[18%_1fr] bg-dxp-grey-1 max-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
