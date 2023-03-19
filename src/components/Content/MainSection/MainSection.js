import { ImportContactsSharp, MovieFilterSharp } from "@mui/icons-material";

function MainSection() {
  return (
    <div className='main-section flex flex-1 grow justify-center px-8 pt-1'>
      <div className='mt-2 flex w-[500px] flex-col items-center rounded-2xl border border-trueGray-800 bg-trueGray-800'>
        <div className='main-section__options relative flex h-[72px] w-full border-b-2 border-trueGray-700'>
          <div
            className='ml-4 flex w-full'
            style={{
              borderBottom: "3.5px solid #3B82F6",
            }}
          >
            <div className='stories flex h-full w-full cursor-pointer justify-center items-center self-center rounded-lg hover:bg-trueGray-700'>
              <ImportContactsSharp
                className='text-blue-400'
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
              <p className='ml-3 text-blue-400'>Stories</p>
            </div>
          </div>
          <div className='reels mr-4 ml-1 flex w-full cursor-pointer items-center justify-center rounded-lg pr-1 hover:bg-trueGray-700'>
            <MovieFilterSharp
              className='text-trueGray-300'
              sx={{
                width: 24,
                height: 24,
              }}
            />
            <p className='ml-3'>Reels</p>
          </div>
        </div>
        <div className='main-section__stories'></div>
      </div>
    </div>
  );
}
export default MainSection;
