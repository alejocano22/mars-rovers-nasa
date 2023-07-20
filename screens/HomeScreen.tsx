import ImageCard from '../components/cards/ImageCard';

export default function HomeScreen({ photos }: any) {
  return (
    <div className='absolute h-5/6 z-10 mt-9'>
      {photos.length ? (
        <div className='h-full overflow-auto no-scrollbar grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 z-10 mx-6'>
          {photos.map((photo: any, index: number) => (
            <ImageCard key={index} image={photo.imgSrc}></ImageCard>
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center w-screen h-screen'>
          <h2 className='text-white'>No pictures were found</h2>
        </div>
      )}
    </div>
  );
}
