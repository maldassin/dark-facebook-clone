import { Avatar } from "@mui/material";
import LeftSidebarRow from "./LeftSidebarRow";
import LeftSidebarData from "./LeftSidebarData";

function LeftSidebar() {
  return (
    <div className='sidebar__left justif flex w-1/5 flex-col border-trueGray-700'>
      <div className='my-2 flex cursor-pointer items-center rounded-l-xl py-2 pl-3 text-sm text-slate-200 hover:bg-trueGray-700'>
        <Avatar
          className=''
          src={"./Me2.jpg"}
          style={{
            width: "42px",
            height: "42px",
          }}
        />
        <p className='ml-4 text-lg font-bold text-coolGray-200'>Maen Dassin</p>
      </div>
      {LeftSidebarData.map((data, index) => (
        <LeftSidebarRow
          key={index}
          icon={data.icon}
          label={data.label}
          color={data.color}
        />
      ))}
    </div>
  );
}

export default LeftSidebar;
