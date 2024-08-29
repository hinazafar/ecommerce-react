import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LuCombine } from "react-icons/lu";
import { changeTab } from "../store/tabSlice";


const Sidebar = () => {
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
    <div className=" d-flex flex-column my-5 mx-2">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${selectedTab === "home" && "active"}`}
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
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="#"
            className={`nav-link ${
              selectedTab === "manage-products" && "active"
            }`}
            onClick={handleAddProduct}
          >
            <LuCombine
              className="me-2"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />
            Manage Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
