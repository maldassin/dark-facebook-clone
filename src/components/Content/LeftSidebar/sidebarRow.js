import React from "react";

function SidebarRow({ icon, label, color }) {
  return (
    <div className='flex cursor-pointer items-center rounded-l-xl py-4 pl-3 text-slate-200 hover:bg-trueGray-700'>
      {React.cloneElement(icon, { sx: { color } })}
      <p className='pl-3 text-sm font-medium text-white'>{label}</p>
    </div>
  );
}

export default SidebarRow;
