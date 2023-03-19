import { ImportContactsSharp, MovieFilterSharp } from "@mui/icons-material";

function MainSection() {
  return (
    <div className='main-section flex w-5/12 grow justify-center px-8 pt-2'>
      <div className='mt-2 flex w-2/3 flex-col items-center rounded-2xl border border-trueGray-800 bg-trueGray-800'>
        <div className='main-section__options flex h-[8%] w-full border-b-2 border-trueGray-700 px-4'>
          <div
            className='stories mx-1 flex
          w-full cursor-pointer items-center justify-center py-3 active:border-blue-500'
            style={{ borderBottom: "3.5px solid #3B82F6" }}
          >
            <ImportContactsSharp
              // fontSize='large'
              className='text-blue-400'
              sx={{
                width: 28,
                height: 28,
              }}
            />
            <p className='ml-3 text-blue-400'>Stories</p>
          </div>
          <div className='reels mx-1 flex w-full cursor-pointer items-center justify-center rounded-lg py-3 hover:bg-trueGray-700'>
            <MovieFilterSharp
              className='text-trueGray-300'
              sx={{
                width: 28,
                height: 28,
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
