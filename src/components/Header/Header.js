import IconButton from "@mui/material/IconButton";
// import { AiFillHome } from "react-icons/ai";
import {
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";

function Header() {
  return (
    <div className="header sticky flex bg-white border-b border-solid border-gray-300 top-0 z-100 py-2 px-2">
      {/* ANCHOR Header left */}
      <div className="header-left flex items-center w-1/5">
        <img
          className="header-logo flex h-10 w-10"
          alt="Facebook logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
        ></img>
        <div className="header-search flex items-center border rounded-full px-1 py-2 ml-3  hover:border-2">
          <Search className="header-search-icon red text-gray-400" />
          <input
            className="header-search-input text-base text-black-200 outline-none bg-transparent px-2"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* ANCHOR Header center */}
      <div className="header-center flex flex-1 justify-center mx-2 py-2 w-3/5">
        <div className="header-page flex items-center py-0 px-8 cursor-pointer">
          <Home fontSize="large" />
        </div>
        <div className="header-page flex items-center py-0 px-8 cursor-pointer">
          <Flag fontSize="large" />
        </div>
        <div className="header-page flex items-center py-0 px-8 cursor-pointer">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header-page flex items-center py-0 px-8 cursor-pointer">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header-page flex items-center py-0 px-8 cursor-pointer">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      {/* ANCHOR Header right */}
      <div className="header-right w-1/5">
        <div className="header-info flex flex-row-reverse">
          {/* <h4>Maen Dassin</h4> */}
          <IconButton size="large">
            <Forum />
          </IconButton>
          <IconButton size="large">
            <NotificationsActive />
          </IconButton>
          <IconButton size="large">
            <ExpandMore />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
