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
  AccountCircle
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function LeftSidebar() {
  return (
    <div className='sidebar__left flex w-1/4 flex-col overflow-hidden pt-3 pl-3'>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <AccountCircle
          // src='../../../assets/images/Me2.jpg'
          // style={{
          //   width: "28px",
          //   height: "28px",
          // }}
        />
        <p className='pl-3 text-sm font-medium text-white'>Maen Dassin</p>
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
        <TurnedIn fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Saved</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <TurnedIn fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Saved</p>
      </div>
      <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
        <TurnedIn fontSize='medium' />
        <p className='pl-3 text-sm font-medium text-white'>Saved</p>
      </div>
    </div>
  );
}
export default LeftSidebar;
