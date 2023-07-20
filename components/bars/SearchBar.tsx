import { getEnabledCamerasByRover } from '../../utils/roverCameras';
import Dropdown from '../elements/Dropdown';
import CalendarInput from '../inputs/CalendarInput';
import Toggle from '../inputs/Toggle';
import NumberInput from '../inputs/NumberInput';

export default function SearchBar({
  selectedRover,
  setSelectedRover,
  selectedCamera,
  setSelectedCamera,
  selectedEarthDate,
  setSelectedEarthDate,
  isEarthDate,
  setIsEarthDate,
  selectedSolDate,
  setSelectedSolDate,
}: any) {
  const rovers = ['curiosity', 'opportunity', 'spirit'];
  const cameras = getEnabledCamerasByRover(selectedRover);

  return (
    <div
      className='flex items-center gap-2 px-6 py-3 bg-transparent w-screen sticky top-0 z-10'
      data-testid='search-bar'
    >
      <img src='./img/nasa-logo.png' className='h-10 mr-4'></img>
      <div className='flex flex-col' data-testid='rover-dropdown'>
        <p className='text-white text-xs'>Rover</p>
        <Dropdown
          options={rovers}
          setOption={setSelectedRover}
          value={selectedRover}
        />
      </div>
      <div className='flex flex-col' data-testid='camera-dropdown'>
        <p className='text-white text-xs'>Camera</p>
        <Dropdown
          options={cameras}
          setOption={setSelectedCamera}
          value={selectedCamera}
        />
      </div>
      {isEarthDate ? (
        <div className='flex flex-col' data-testid='earth-date'>
          <p className='text-white text-xs'>Earth Date</p>
          <CalendarInput
            date={selectedEarthDate}
            setDate={setSelectedEarthDate}
          />
        </div>
      ) : (
        <div className='flex flex-col' data-testid='sol-date'>
          <p className='text-white text-xs'>Sol Date</p>
          <NumberInput
            value={selectedSolDate}
            setValue={setSelectedSolDate}
            data-testid='sol-date'
          />
        </div>
      )}
      <div className='flex flex-col' data-testid='date-toggle'>
        <p className='text-white text-xs'>Change Date Type</p>
        <Toggle state={isEarthDate} setState={setIsEarthDate} />
      </div>
    </div>
  );
}
