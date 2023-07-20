export const toMarsRoverPhoto = (photo: any) => {
  return {
    id: photo.id,
    imgSrc: photo.img_src,
  };
};

export const toMarsRoverPhotos = (photos: any[]) => {
  return photos?.map((photo: any) => toMarsRoverPhoto(photo));
};
