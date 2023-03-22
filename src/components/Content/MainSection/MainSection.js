import { ImportContactsSharp, MovieFilterSharp } from "@mui/icons-material";

function MainSection() {
  return (
    <div className='main-section flex w-full justify-center flex-1 shrink-0'>
      <div className='mt-4 flex w-[73%] flex-col items-center rounded-lg border border-trueGray-800 bg-trueGray-800'>
        <div className='main-section__options relative flex h-[72px] w-full border-b-2 border-trueGray-700'>
          <div
            className='ml-4 flex w-full'
            style={{
              borderBottom: "3.5px solid #3B82F6",
            }}
          >
            <div className='stories flex h-full w-full cursor-pointer items-center justify-center self-center rounded-lg'>
              <ImportContactsSharp
                className='text-blue-400'
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
              <p className='ml-2 text-blue-400'>Stories</p>
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
            <p className='ml-2'>Reels</p>
          </div>
        </div>
        <div className='main-section__stories'></div>
      </div>
    </div>
  );
}
export default MainSection;
