import { MoreHoriz, Search, VideoCall } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Badge, { badgeClasses } from "@mui/material/Badge";
import friendsData from "./Friends.json";

function RightSidebar() {
  return (
    <div className='sidebar__right__main w-1/5'>
      <div className='sidebar__right__top-container flex flex-row'>
        <div className='sidebar__right__headline flex w-full items-center justify-between border-b-2 border-trueGray-700 pb-2'>
          <p className='ml-2 text-lg text-trueGray-300'>Friends</p>
          <div className='sidebar_right__headline__options flex-end flex cursor-pointer pr-2'>
            <VideoCall
              fontSize='medium'
              className='mx-1 text-trueGray-300 hover:text-trueGray-400'
            />
            <Search
              fontSize='medium'
              className='mx-1 text-trueGray-300 hover:text-trueGray-400'
            />
            <MoreHoriz
              fontSize='medium'
              className='mx-1 text-trueGray-300 hover:text-trueGray-400'
            />
          </div>
        </div>
      </div>
      <div className='sidebar__right__friends'>
        {/* <p className='mt-2 pb-2 pr-4 text-center text-base text-slate-300'>online</p> */}
        {friendsData
          .filter((friend) => friend.status.includes("online"))
          .map((friend) => (
            <div
              key={friend.name}
              className='py- flex cursor-pointer items-center self-center rounded-lg py-2 px-2 pl-2
            hover:bg-trueGray-700'>
              <Stack spacing={2} direction='row'>
                <Badge
                  overlap='circular'
                  variant='dot'
                  color='success'
                  sx={{
                    [`& .${badgeClasses.dot}`]: {
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}>
                  <img
                    loading='lazy'
                    src={friend.image}
                    className='h-12 w-12 rounded-full object-cover'
                  />
                </Badge>
              </Stack>
              <p className='ml-3 self-center text-coolGray-300'>{friend.name}</p>
            </div>
          ))}
        {/* <p className='mt-3 border-b-2 border-trueGray-700 pb-2 pr-2 text-center text-base text-slate-300'>
          offline{" "}
        </p> */}
        <div className='my-1 border-b-2 border-trueGray-700'></div>
        {friendsData
          .filter((friend) => friend.status.includes("offline"))
          .map((friend) => (
            <div
              key={friend.name}
              className='py- flex cursor-pointer items-center self-center rounded-lg py-2 px-2 pl-2
            hover:bg-trueGray-700'>
              <Stack spacing={2} direction='row'>
                <Badge
                  overlap='circular'
                  variant='dot'
                  color='error'
                  sx={{
                    [`& .${badgeClasses.dot}`]: {
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}>
                  <img
                    loading='lazy'
                    src={friend.image}
                    className='h-12 w-12 rounded-full object-cover'
                  />
                </Badge>
              </Stack>
              <p className='ml-3 self-center text-coolGray-300'>{friend.name}</p>
            </div>
          ))}
        <div className='mt-2 border-b-2 border-trueGray-700'></div>
      </div>
    </div>
  );
}
export default RightSidebar;
