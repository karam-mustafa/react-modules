import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import HomeNavbar from "./components/Navs/HomeNavbar";
import HomeFooter from "./components/Footers/HomeFooter";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <HomeNavbar />
      <div className="container">
        <Outlet />
      </div>
      <Toaster />
      <HomeFooter />
    </Provider>
  );
}

export default App;
