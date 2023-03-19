import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import MainSection from "./MainSection/MainSection";

function Content() {
  return (
    <div className='flex flex-row py-2 px-2'>
      <LeftSidebar />
      <MainSection />
      <RightSidebar />
    </div>
  );
}
export default Content;
