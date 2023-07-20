export const getMarsRoverPhotos = async (
  rover: string,
  camera: string,
  earthDate: string | undefined,
  solDate: number | undefined
) => {
  let cameraParam = null;
  if (camera != 'all') {
    cameraParam = `&camera=${camera}`;
  }
  const queryParams = buildQueryParams(camera, earthDate, solDate);
  return await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${queryParams}`
  ).then((res) => res.json());
};

const buildQueryParams = (
  camera: string,
  earthDate: string | undefined,
  solDate: number | undefined
) => {
  let queryParams = `api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&page=1`;
  if (camera != 'all') {
    queryParams += `&camera=${camera}`;
  }
  if (earthDate) {
    queryParams += `&earth_date=${earthDate}`;
  }
  if (solDate) {
    queryParams += `&sol=${solDate}`;
  }
  return queryParams;
};
