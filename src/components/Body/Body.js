import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import MainSection from "./MainSection/MainSection";

function Body() {
  return (
    <div className='body h-screen bg-trueGray-900'>
      <LeftSidebar />
      <MainSection />
      <RightSidebar />
    </div>
  );
}
export default Body;
