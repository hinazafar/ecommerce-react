import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="flex-d container-fluid vw-100 ">
        <div className="p-2">
          <Header></Header>
        </div>

        <div className=".d-sm-none .d-md-block d-flex flex-column flex-md-row mt-2 mb-4">
          {currentUser !== null ? ( <div className="w-100 w-md-20 mt-sm-5"
            style={{
              borderRadius: "5px",
              backgroundColor: "#e9ecef",
            }}
          >
            <Sidebar />
          </div>):<></> }
          <div className=" w-100 w-md-80 mt-sm-2 mt-md-5" >
            <Outlet />
          </div>
        </div>
        <div className="p-2">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
