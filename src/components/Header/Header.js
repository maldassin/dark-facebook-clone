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
} from '@mui/icons-material';
// import { Avatar } from "@mui/material";
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    // ANCHOR Header
    <div className='header z-100 sticky inset-0 flex justify-between border-b border-solid border-trueGray-400 bg-trueGray-800'>
      {/* ANCHOR Header left */}
      <div className='header__left flex w-1/5 justify-evenly self-center'>
        <img
          className='header__left__logo flex h-10 w-10'
          alt='Facebook logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'></img>
        <div className='header__left__search flex items-center rounded-full bg-trueGray-700 text-base'>
          <Search className='header__left_search_icon text-xs text-trueGray-400' />
          <input
            className='header_left__search__input bg-transparent px-2 text-sm text-trueGray-400 outline-none'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      {/* ANCHOR Header center */}
      <div className='header__center flex flex-1 grow justify-center'>
        <div className='header__center__options flex w-4/6'>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-xl
           hover:bg-trueGray-700'>
            <Home
              className='active: self-center text-blue-500'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-xl
           hover:bg-trueGray-700'>
            <Flag className='self-center text-trueGray-400' fontSize='large' />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-xl
           hover:bg-trueGray-700'>
            <SubscriptionsOutlined
              className='self-center text-trueGray-400'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-xl 
					hover:bg-trueGray-700'>
            <StorefrontOutlined
              className='self-center text-trueGray-400'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option flex h-full w-full cursor-pointer justify-center rounded-xl
           hover:bg-trueGray-700'>
            <SupervisedUserCircle
              className='self-center text-trueGray-400'
              fontSize='large'
            />
          </div>
        </div>
      </div>

      {/* ANCHOR Header right */}
      <div className='header__right flex w-1/5 flex-row-reverse'>
        <div className='header__right__info flex'>
          {/* <h4>Maen Dassin</h4> */}
          {/* <Avatar /> */}
          <IconButton size='large'>
            <Forum className='text-trueGray-400' />
          </IconButton>
          <IconButton size='large'>
            <NotificationsActive
              className='text-trueGray-400'
            />
          </IconButton>
          <IconButton size='large'>
            <ExpandMore className='text-trueGray-400' />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
