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
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    // ANCHOR Header
    <div className="header: sticky flex bg-trueGray-800 border-b border-solid border-trueGray-400 top-0 z-100 py-2 px-2">
      {/* ANCHOR Header left */}
      <div className="header__left: flex items-center inset-0 w-80">
        <img
          className="header__left__logo: flex h-10 w-10"
          alt="Facebook logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
        ></img>
        <div className="header__left__search: flex relative text-base bg-trueGray-700 items-center rounded-full">
          <Search className="header__left_search_icon: text-trueGray-400 text-xs" />
          <input
            className="header_left__search__input: outline-none text-sm text-trueGray-400 bg-transparent px-2"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* ANCHOR Header center */}
      <div className="header__center: flex grow flex-1 justify-center">
        <div className="header__center_options: flex items-center py-0 px-8 cursor-pointer">
          <Home className="text-trueGray-400" fontSize="large" />
        </div>
        <div className="header__center_options: flex items-center py-0 px-8 cursor-pointer">
          <Flag className="text-trueGray-400" fontSize="large" />
        </div>
        <div className="header__center_options: flex items-center py-0 px-8 cursor-pointer">
          <SubscriptionsOutlined className="text-trueGray-400" fontSize="large" />
        </div>
        <div className="header__center_options: flex items-center py-0 px-8 cursor-pointer">
          <StorefrontOutlined className="text-trueGray-400" fontSize="large" />
        </div>
        <div className="header__center_options: flex items-center py-0 px-8 cursor-pointer">
          <SupervisedUserCircle className="text-trueGray-400" fontSize="large" />
        </div>
      </div>

      {/* ANCHOR Header right */}
      <div className="header__right: flex flex-row-reverse inset-0 w-1/5">
        <div className="header__right__info: flex">
          {/* <h4>Maen Dassin</h4> */}
          {/* <Avatar /> */}
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
