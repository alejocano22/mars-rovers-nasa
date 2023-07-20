import { render, screen } from '@testing-library/react';
import SearchBar from '../components/bars/SearchBar';
import { toMarsRoverPhotos } from '../utils/mappers/photos';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('should render the searchBar', () => {
    render(<SearchBar />);
    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });

  it('should render the rover dropdown in the searchBar', () => {
    render(<SearchBar />);
    const roverDropdown = screen.getByTestId('rover-dropdown');
    expect(roverDropdown).toBeInTheDocument();
  });

  it('should render the camera dropdown in the searchBar', () => {
    render(<SearchBar />);
    const cameraDropdown = screen.getByTestId('camera-dropdown');
    expect(cameraDropdown).toBeInTheDocument();
  });

  it('should render the earth date input in the searchBar', () => {
    render(<SearchBar isEarthDate={true} />);
    const earthDateInput = screen.getByTestId('earth-date');
    expect(earthDateInput).toBeInTheDocument();
  });

  it('should render the sol date input in the searchBar', () => {
    render(<SearchBar isEarthDate={false} />);
    const earthDateInput = screen.getByTestId('sol-date');
    expect(earthDateInput).toBeInTheDocument();
  });

  it('should render the date toggle in the searchBar', () => {
    render(<SearchBar />);
    const dateToggle = screen.getByTestId('date-toggle');
    expect(dateToggle).toBeInTheDocument();
  });
});

describe('Utils', () => {
  it('should map the photos object', () => {
    const photosFromAPI = [
      {
        id: 1001664,
        sol: 3536,
        camera: {
          id: 20,
          name: 'FHAZ',
          rover_id: 5,
          full_name: 'Front Hazard Avoidance Camera',
        },
        img_src:
          'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03536/opgs/edr/fcam/FLB_711404019EDR_F0960642FHAZ00302M_.JPG',
        earth_date: '2022-07-18',
      },
      {
        id: 1001665,
        sol: 3536,
        camera: {
          id: 20,
          name: 'FHAZ',
          rover_id: 5,
          full_name: 'Front Hazard Avoidance Camera',
        },
        img_src:
          'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03536/opgs/edr/fcam/FRB_711404019EDR_F0960642FHAZ00302M_.JPG',
        earth_date: '2022-07-18',
      },
    ];

    const mappedPhotos = toMarsRoverPhotos(photosFromAPI);
    const expectedResult = [
      {
        id: 1001664,
        imgSrc:
          'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03536/opgs/edr/fcam/FLB_711404019EDR_F0960642FHAZ00302M_.JPG',
      },
      {
        id: 1001665,
        imgSrc:
          'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03536/opgs/edr/fcam/FRB_711404019EDR_F0960642FHAZ00302M_.JPG',
      },
    ];
    expect(mappedPhotos).toStrictEqual(expectedResult);
  });
});
