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
import { Avatar, Stack } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    // ANCHOR Header
    <div className='header h-100vh sticky inset-0 z-10 flex justify-between overflow-hidden border-b border-solid border-y-trueGray-700 bg-trueGray-800'>
      {/* ANCHOR Header left */}
      <div className='header__left flex h-10 w-1/5 justify-between self-center'>
        <img
          className='header__left__logo ml-4 flex h-10 w-10'
          alt='Facebook logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'
        ></img>
        <div className='header__left__search flex w-4/5 items-center justify-center rounded-full bg-trueGray-700 text-base'>
          <Search className='header__left_search_icon h-full self-center text-xs text-coolGray-400' />
          <input
            className='header_left__search__input placeho bg-transparent px-2 text-base text-gray-300 placeholder-trueGray-400 outline-none'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      <div className='header__center flex flex-1 grow justify-center'>
        <div className='header__center__options flex w-4/6'>
          {/* ANCHOR Header center */}
          <div
            className='header__center_option mx-2 flex w-full cursor-pointer justify-center rounded-t-xl border border-none
           hover:bg-trueGray-700'
            style={{
              borderBottom: "3.5px solid #3B82F6",
            }}
          >
            <Home
              className='active: self-center text-blue-500'
              fontSize='large'
            />
          </div>
          {/* </div> */}
          <div
            className='header__center_option mx-2 flex h-full w-full cursor-pointer justify-center rounded-b-xl rounded-t-xl border border-none
           hover:bg-trueGray-700'
          >
            <Flag
              className='self-center 
              text-trueGray-400'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option mx-2 flex h-full w-full cursor-pointer justify-center rounded-b-xl rounded-t-xl border border-none
           hover:bg-trueGray-700'
          >
            <SubscriptionsOutlined
              className='self-center text-trueGray-400'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option mx-2 flex h-full w-full cursor-pointer justify-center rounded-b-xl rounded-t-xl border border-none
					hover:bg-trueGray-700'
          >
            <StorefrontOutlined
              className='self-center text-trueGray-400'
              fontSize='large'
            />
          </div>
          <div
            className='header__center_option mx-2 flex h-full w-full cursor-pointer justify-center rounded-b-xl rounded-t-xl border border-none 
           hover:bg-trueGray-700'
          >
            <SupervisedUserCircle
              className='self-center text-trueGray-400'
              fontSize='large'
            />
          </div>
        </div>
      </div>

      {/* ANCHOR Header right */}
      <div className='header__right flex w-1/6 flex-row-reverse'>
        <div className='header__right__info flex w-full justify-end pt-1 pr-2'>
          <div
            className='test mr-1 self-center rounded-full bg-trueGray-700
          outline-none hover:bg-trueGray-500'
          >
            <IconButton size='medium'>
              <Apps fontSize='medium' className='text-slate-200 ' />
            </IconButton>
          </div>
          <div
            className='test mx-1 self-center rounded-full bg-trueGray-700
          outline-none hover:bg-trueGray-500'
          >
            <Stack spacing={2} direction='row'>
              <Badge
                overlap='circular'
                badgeContent='4'
                color='error'
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <IconButton size='medium'>
                  <Forum fontSize='medium' className='text-slate-200' />
                </IconButton>
              </Badge>
            </Stack>
          </div>
          <div
            className='test ml-1 mr-2 self-center rounded-full bg-trueGray-700
          outline-none hover:bg-trueGray-500'
          >
            <Stack spacing={2} direction='row'>
              <Badge
                overlap='circular'
                badgeContent='7'
                color='error'
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <IconButton size='medium'>
                  <Notifications fontSize='medium' className='text-slate-200' />
                </IconButton>
              </Badge>
            </Stack>
          </div>
          <div className='header_right_info__avatar mr-2 flex cursor-pointer flex-col items-center py-1 text-slate-200'>
            <Avatar
              src={"./Me2.jpg"}
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
