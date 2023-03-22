import { MoreHoriz, Search, VideoCall, CakeSharp } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Badge, { badgeClasses } from "@mui/material/Badge";
import friendsData from "./RightSidebarData.json";

function RightSidebar() {
  return (
    <div className='sidebar__right__main w-[23%]'>
      <div className='sidebar__right__top-container flex flex-row'>
        <div className='sidebar__right__headline flex w-full items-center justify-between pb-2'>
          <p className='ml-2 text-lg text-trueGray-300'>Birthdays</p>
          <div className='sidebar_right__headline__options flex-end flex cursor-pointer pr-2'>
            <MoreHoriz
              fontSize='medium'
              className='mx-1 text-trueGray-300 hover:text-trueGray-400'
            />
          </div>
        </div>
      </div>
      <div className='sidebar__right_birthdays my-2 flex w-full justify-center self-center'>
        <div className='birthday flex max-w-full py-4'>
          <CakeSharp
            sx={{
              width: 40,
              height: 40,
            }}
            className='ml-3 mr-4 self-center text-purple-700'
          />
          <p className='text-base text-coolGray-300'>
            <span className='inline-block font-semibold'>Qais&nbsp;</span>
            and
            <span className='inline-block font-semibold'>
              &nbsp;Manal&nbsp;{" "}
            </span>
            have birthdays today!
          </p>
        </div>
      </div>
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
        <p className='mt-2 pb-2 pr-4 text-center text-base text-slate-300'>
          online
        </p>
        {friendsData
          .filter((friend) => friend.status.includes("online"))
          .map((friend) => (
            <div
              key={friend.name}
              className='mt-2 flex cursor-pointer items-center self-center rounded-lg py-2 px-2 pl-2
            hover:bg-trueGray-700'
            >
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
                  }}
                >
                  <img
                    loading='lazy'
                    src={friend.image}
                    className='h-12 w-12 rounded-full object-cover'
                  />
                </Badge>
              </Stack>
              <p className='ml-3 self-center text-coolGray-300'>
                {friend.name}
              </p>
            </div>
          ))}
        <p className='mt-3 pb-1 pr-2 text-center text-base text-slate-300'>
          offline{" "}
        </p>
        <div className='my-3 border-b-2 border-trueGray-700'></div>
        {friendsData
          .filter((friend) => friend.status.includes("offline"))
          .map((friend) => (
            <div
              key={friend.name}
              className='flex cursor-pointer items-center self-center rounded-lg py-2 px-2 pl-2
            hover:bg-trueGray-700'
            >
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
                  }}
                >
                  <img
                    loading='lazy'
                    src={friend.image}
                    className='h-12 w-12 rounded-full object-cover'
                  />
                </Badge>
              </Stack>
              <p className='ml-3 self-center text-coolGray-300'>
                {friend.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default RightSidebar;
