import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import HomeNavbar from "./components/Navs/HomeNavbar";
import HomeFooter from "./components/Footers/HomeFooter";

function App() {
  return (
    <>
      <HomeNavbar />
      <div className="container">
        <Outlet />
      </div>
      <HomeFooter  />
    </>
  );
}

export default App;
