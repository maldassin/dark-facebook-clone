import {
  Apps,
  Flag,
  Forum,
  Home,
  Notifications,
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
    <div className='header z-100 h-100vh sticky inset-0 flex justify-between border-b border-solid border-y-trueGray-700 bg-trueGray-800 py-0'>
      {/* ANCHOR Header left */}
      <div className='header__left flex h-10 w-1/5 justify-between self-center'>
        <img
          className='header__left__logo ml-4 flex h-10 w-10'
          alt='Facebook logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'></img>
        <div className='header__left__search flex w-4/5 items-center justify-center rounded-full bg-trueGray-700 text-base'>
          <Search className='header__left_search_icon h-full self-center text-xs text-coolGray-400' />
          <input
            className='header_left__search__input placeho bg-transparent px-2 text-base text-gray-300 placeholder-trueGray-400 outline-none'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      {/* ANCHOR Header center */}
      <div className='header__center flex flex-1 grow justify-center'>
        <div className='header__center__options flex w-4/6'>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center
           rounded-t-xl border-b-2 border-blue-500 hover:bg-trueGray-700'>
            <Home
              className='active: self-center text-blue-500'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-t-xl
           hover:bg-trueGray-700'>
            <Flag
              className='self-center 
              text-trueGray-400 hover:text-blue-500'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-t-xl
           hover:bg-trueGray-700'>
            <SubscriptionsOutlined
              className='self-center text-trueGray-400 hover:text-blue-500'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-t-xl 
					hover:bg-trueGray-700'>
            <StorefrontOutlined
              className='self-center text-trueGray-400 hover:text-blue-500'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-t-xl
           hover:bg-trueGray-700'>
            <SupervisedUserCircle
              className='self-center text-trueGray-400 hover:text-blue-500'
              fontSize='large'
            />
          </div>
        </div>
      </div>

      {/* ANCHOR Header right */}
      <div className='header__right flex w-1/6 flex-row-reverse'>
        <div className='header__right__info flex w-full justify-evenly'>
          <div className='test self-center rounded-full bg-trueGray-700 outline-none'>
            <IconButton size='medium'>
              <Apps fontSize='medium' className='text-slate-200' />
            </IconButton>
          </div>
          <div className='test self-center rounded-full bg-trueGray-700 outline-none'>
            <IconButton size='medium'>
              <Forum fontSize='medium' className='text-slate-200' />
            </IconButton>
          </div>
          <div className='test self-center rounded-full bg-trueGray-700 outline-none'>
            <IconButton size='medium'>
              <Notifications fontSize='medium' className='text-slate-200' />
            </IconButton>
          </div>
          <div className='header_right_info__avatar flex flex-col items-center text-slate-200 py-1'>
            <Avatar
              src={"../../assets/images/Me2.jpg/"}
              style={{
                width: "38px",
                height: "38px",
              }}
            />
            <p className='text-sm'>Maen Dassin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
