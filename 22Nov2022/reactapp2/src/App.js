import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import Navber from "./Navber/Navber";
import Sidebar from "./Sidebar/Sidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header
        brand="My Hoby It Teaching"
        slogan="Coding is best Way for income source"
      />
      <Navber />
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
