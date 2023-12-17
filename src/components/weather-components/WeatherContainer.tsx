import React from 'react';
import LocationInfo from './LocationInfo';
import WeatherInfo from './WeatherInfo';

interface WeatherContainerProps {
  searchInput: string;
  response: object;
}

const WeatherContainer: React.FC<WeatherContainerProps> = ({ searchInput, response }) => {
  const weatherContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    justifyContent: 'center'
  };

  return (
    <div style={weatherContainerStyles}>
      <LocationInfo response={response} searchInput={searchInput} />
      <WeatherInfo response={response} />
    </div>
  );
};

export default WeatherContainer;
