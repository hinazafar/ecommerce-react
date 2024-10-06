import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LuCombine } from "react-icons/lu";
import { changeTab } from "../store/tabSlice";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { FaFirstOrderAlt } from "react-icons/fa6";


const Sidebar = () => {
   // State to track sidebar visibility
   const [isSidebarVisible, setSidebarVisible] = useState(true);
   // Function to toggle sidebar visibility
   const closeSidebar = () => {
      // Hide sidebar
     if(isSidebarVisible)
     {
      setSidebarVisible(false);
     }
     else
     {
      setSidebarVisible(true);
     }
   }; 
   const openSidebar = () => {
     setSidebarVisible(true); // Show sidebar
     console.log("sidebar open");
   };
  const navigate = useNavigate();
  const { selectedTab } = useSelector((state) => state.tab);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!currentUser) {
      navigate("/sign-in");
    } else {
      dispatch(changeTab("manage-products"));
      navigate("/manage-products");
    }
  };

  const handleHome = (e) => {
    e.preventDefault();
    dispatch(changeTab("home"));
    navigate("/");
  };

  return (
    
    <div id="sidebar" className= {`d-flex flex-column my-5 mx-2 sidebar border  ${!isSidebarVisible && "sidebar-hidden"}`}>
    
      <button type="button" className="btn px-2 ms-auto  "   onClick={closeSidebar}> {isSidebarVisible ? <FaArrowLeft style={{ fontSize: "16px", color: "#000" }} /> : <FaArrowRight style={{ fontSize: "16px", color: "#000" }} />}</button>
      
      <ul className="nav nav-pills flex-column mb-auto">
        <li className={ ` nav-item ${isSidebarVisible ? "" : "text-end"}`}>
          <Link
            to="/"
            className={`nav-link ms-auto ${selectedTab === "home" && "active"}`}
            aria-current="page"
            onClick={handleHome}
          >
            <IoHomeOutline
              className="me-2"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />
            Home {!isSidebarVisible ?  <IoHomeOutline
              className=""
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />:""}
          </Link>
        </li>

        <li className={ ` nav-item ${isSidebarVisible ? "" : "text-end"}`}>
          <Link
            to="#"
            className={`nav-link ms-auto  ${
              selectedTab === "manage-products" && "active"
            }`}
            onClick={handleAddProduct}
          >
            <LuCombine
              className=""
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />
            Manage Products
            {!isSidebarVisible ? <LuCombine
              className="mx-0"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 0px 0px",
              }}
            />:""}
          </Link>
        </li>
        <li className={ ` nav-item ${isSidebarVisible ? "" : "text-end"}`}>
          <Link
            to="#"
            className={`nav-link ms-auto  ${
              selectedTab === "sales" && "active"
            }`}
            onClick={handleAddProduct}
          >
            <FcSalesPerformance
              className=""
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />
            Sales
            {!isSidebarVisible ? <FcSalesPerformance
              className="mx-0"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 0px 0px",
              }}
            />
            :""}
          </Link>
        </li>
        <li className={ ` nav-item ${isSidebarVisible ? "" : "text-end"}`}>
          <Link
            to="#"
            className={`nav-link ms-auto  ${
              selectedTab === "OrderStatus" && "active"
            }`}
            onClick={handleAddProduct}
          >
            <FaFirstOrderAlt 
              className=""
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />
            Order Status
            {!isSidebarVisible ? <FaFirstOrderAlt 
              className="mx-0"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 0px 0px",
              }}
            />
            :""}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
