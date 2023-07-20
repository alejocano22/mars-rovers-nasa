const ImageCard = ({ image }: any) => {
  return (
    <div className='flex m-2 items-center rounded-md'>
      <img className='h-auto max-w-full rounded-md' src={image}></img>
    </div>
  );
};

export default ImageCard;
