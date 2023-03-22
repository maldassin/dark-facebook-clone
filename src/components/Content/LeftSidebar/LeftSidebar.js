import { Avatar } from "@mui/material";
import LeftSidebarRow from "./LeftSidebarRow";
import LeftSidebarData from "./LeftSidebarData";

function LeftSidebar() {
  return (
    <div className='sidebar__left flex w-[23%] flex-col border-trueGray-700'>
      <div className='my-2 flex cursor-pointer items-center rounded-l-xl py-2 pl-3 text-sm text-slate-200 hover:bg-trueGray-700'>
        <Avatar
          src={"./Me2.jpg"}
          style={{
            width: "36px",
            height: "36px",
          }}
        />

        <p className='pl-2 text-sm font-medium text-slate-200'>Maen Dassin</p>
      </div>

      {LeftSidebarData.map((data, index) =>
        index == 7 ? (
          <div className='my-2 border-b-2 border-trueGray-700'></div>
        ) : (
          <LeftSidebarRow
            key={index}
            icon={data.icon}
            label={data.label}
            color={data.color}
          />
        )
      )}
    </div>
  );
}

export default LeftSidebar;
