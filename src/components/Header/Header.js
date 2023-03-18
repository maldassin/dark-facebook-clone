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
    <div className='header z-100 h-100vh sticky inset-0 flex justify-between border-b border-solid border-y-trueGray-700 bg-trueGray-800'>
      {/* ANCHOR Header left */}
      <div className='header__left flex w-1/5 justify-between self-center'>
        <img
          className='header__left__logo ml-5 flex h-9 w-9'
          alt='Facebook logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'></img>
        <div className='header__left__search flex w-4/5 items-center justify-center rounded-full bg-trueGray-700 text-base'>
          <Search className='header__left_search_icon h-full self-center text-xs text-coolGray-400' />
          <input
            className='header_left__search__input placeho bg-transparent px-2 text-base text-gray-300 placeholder-coolGray-400 outline-none'
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
           border-b-2 border-blue-500 hover:bg-trueGray-700'>
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
      <div className='header__right flex w-1/6 flex-row-reverse'>
        <div className='header__right__info flex w-full justify-evenly'>
          {/* <h4>Maen Dassin</h4> */}
          <IconButton className='bg-red-500' size='medium'>
            <Apps fontSize='medium' className='text-trueGray-400' />
          </IconButton>
          <IconButton className='bg-red-500' size='medium'>
            <Forum fontSize='medium' className='text-trueGray-400' />
          </IconButton>
          <IconButton className='bg-red-500' size='medium'>
            <Notifications fontSize='medium' className='text-trueGray-400' />
          </IconButton>
          <Avatar src={'../../assets/images/Me2.jpg'} />
        </div>
      </div>
    </div>
  );
}

export default Header;
