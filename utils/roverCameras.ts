const cameras = [
  {
    abbreviation: 'all',
    camera: 'all',
    rovers: ['curiosity', 'opportunity', 'spirit'],
  },
  {
    abbreviation: 'FHAZ',
    camera: 'Front Hazard Avoidance Camera',
    rovers: ['curiosity', 'opportunity', 'spirit'],
  },
  {
    abbreviation: 'RHAZ',
    camera: 'Rear Hazard Avoidance Camera',
    rovers: ['curiosity', 'opportunity', 'spirit'],
  },
  {
    abbreviation: 'MAST',
    camera: 'Mast Camera',
    rovers: ['curiosity'],
  },
  {
    abbreviation: 'CHEMCAM',
    camera: 'Chemistry and Camera Complex',
    rovers: ['curiosity'],
  },
  {
    abbreviation: 'MAHLI',
    camera: 'Mars Hand Lens Imager',
    rovers: ['curiosity'],
  },
  {
    abbreviation: 'MARDI',
    camera: 'Mars Descent Imager',
    rovers: ['curiosity'],
  },
  {
    abbreviation: 'NAVCAM',
    camera: 'Navigation Camera',
    rovers: ['curiosity', 'opportunity', 'spirit'],
  },
  {
    abbreviation: 'PANCAM',
    camera: 'Panoramic Camera',
    rovers: ['opportunity', 'spirit'],
  },
  {
    abbreviation: 'MINITES',
    camera: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    rovers: ['opportunity', 'spirit'],
  },
];

export const getEnabledCamerasByRover = (rover: string) => {
  return cameras
    .filter((camera) => camera.rovers.includes(rover))
    .map((camera) => camera.abbreviation);
};
