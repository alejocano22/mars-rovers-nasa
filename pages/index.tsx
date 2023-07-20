import { useEffect, useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchBar from '../components/bars/SearchBar';
import { getMarsRoverPhotos } from '../services/marsRover';
import { toMarsRoverPhotos } from '../utils/mappers/photos';
import { getToday } from '../utils/dates';

export default function Home() {
  const [selectedRover, setSelectedRover] = useState('curiosity');
  const [selectedCamera, setSelectedCamera] = useState('all');
  const [selectedEarthDate, setSelectedEarthDate] = useState(getToday());
  const [selectedSolDate, setSelectedSolDate] = useState(1000);
  const [isEarthDate, setIsEarthDate] = useState(true);
  const [roverPhotos, setRoverPhotos] = useState<any>([]);

  useEffect(() => {
    fetch();
    return () => {};
  }, [
    selectedRover,
    selectedCamera,
    selectedEarthDate,
    selectedSolDate,
    isEarthDate,
  ]);

  const fetch = async () => {
    const { photos } = await getMarsRoverPhotos(
      selectedRover,
      selectedCamera,
      isEarthDate ? selectedEarthDate : undefined,
      isEarthDate ? undefined : selectedSolDate
    );
    setRoverPhotos(toMarsRoverPhotos(photos));
  };
  return (
    <>
      <SearchBar
        selectedRover={selectedRover}
        setSelectedRover={setSelectedRover}
        selectedCamera={selectedCamera}
        setSelectedCamera={setSelectedCamera}
        selectedEarthDate={selectedEarthDate}
        setSelectedEarthDate={setSelectedEarthDate}
        isEarthDate={isEarthDate}
        setIsEarthDate={setIsEarthDate}
        selectedSolDate={selectedSolDate}
        setSelectedSolDate={setSelectedSolDate}
      />
      <HomeScreen photos={roverPhotos} />
      <div className='space stars1 z-0'></div>
      <div className='space stars2 z-0'></div>
      <div className='space stars3 z-0'></div>
    </>
  );
}
