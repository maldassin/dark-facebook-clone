import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import MainSection from "./MainSection/MainSection";

function Content() {
  return (
    <div className='flex flex-row pt-2 pl-2'>
      <LeftSidebar />
      <MainSection />
      <RightSidebar />
    </div>
  );
}
export default Content;
