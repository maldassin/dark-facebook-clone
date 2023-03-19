import {
  Campaign,
  Flag,
  Group,
  Storefront,
  Subscriptions,
  Stars,
  Timeline,
  History,
  SportsEsports,
  TurnedIn,
  Payment,
  LiveTv,
  CalendarMonth,
  Message,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function LeftSidebar() {
  return (
    <div className='sidebar__left flex w-1/5 flex-col border-r-2 border-trueGray-700'>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Avatar
          src={"./Me2.jpg"}
          style={{
            width: "28px",
            height: "28px",
          }}
        />
        <p className='pl-3 text-sm font-medium text-white'>Maen Dassin</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Message />
        <p className='pl-3 text-sm font-medium text-white'>Messenger</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Flag fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Pages</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Group fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Groups</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Campaign fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Ads</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Timeline fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Ads Manager</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Storefront fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Marketplace</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Stars fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Favorites</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Subscriptions fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Subscriptions</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <History fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Memories</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <SportsEsports fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Gaming</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <TurnedIn fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Saved</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <Payment fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Payments</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <LiveTv fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Watch</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <CalendarMonth fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Events</p>
      </div>
    </div>
  );
}
export default LeftSidebar;
