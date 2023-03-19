import { VideoCall, Search, MoreHoriz, Mail } from "@mui/icons-material";
import friendsData from "./Friends.json";

function RightSidebar() {
  return (
    <div className='sidebar__right__main w-1/5 border-l-2 border-trueGray-700'>
      <div className='sidebar__right__top-container flex flex-row'>
        <div className='sidebar__right__headline flex w-full items-center justify-between border-b-2 border-trueGray-700 pb-2'>
          <p className='ml-2 text-lg text-white'>Contacts</p>
          <div className='sidebar_right__headline__options flex-end flex cursor-pointer'>
            <VideoCall
              fontSize='medium'
              className='mx-1 text-slate-200 hover:text-trueGray-400'
            />
            <Search
              fontSize='medium'
              className='mx-1 text-slate-200 hover:text-trueGray-400'
            />
            <MoreHoriz
              fontSize='medium'
              className='mx-1 text-slate-200 hover:text-trueGray-400'
            />
          </div>
        </div>
      </div>
      <div className='sidebar__right__friends'>
        {friendsData
          .filter((friend) => friend.status.includes("online"))
          .map((friend) => (
            <div
              key={friend.name}
              className='py- flex cursor-pointer items-center self-center rounded-lg py-2 px-2 pl-2
            hover:bg-trueGray-700'>
              <img
                src={process.env.PUBLIC_URL + friend.image}
                className='h-12 w-12 rounded-full object-cover'
              />
              <p className='ml-3 self-center text-white'>{friend.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default RightSidebar;
