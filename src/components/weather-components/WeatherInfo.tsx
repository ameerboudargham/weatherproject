import { cardStyle } from "../../shared/constants";

const divStyles = {
  display: 'flex'
};

function WeatherInfo({
  response,
}: {
  response: {list?: {feels_like?: { day?: number };weather?: { main?: string; description?: string }[];
    }[];
  };
}) {
// @ts-ignore
  let unix_timestamp1 = response?.list?.[0]?.sunrise;

 
  var date = new Date(unix_timestamp1 * 1000);
  
  var hours = date.getHours();
  
  var minutes = "0" + date.getMinutes();
  
  
  
  var formattedTimeRise = hours + ':' + minutes.substr(-2) 
  
  // @ts-ignore
  let unix_timestamp2 = response?.list?.[0]?.sunset;

  var date = new Date(unix_timestamp2 * 1000);
  
  var hours = date.getHours();
  
  var minutes = "0" + date.getMinutes();
  
  
  
  var formattedTimeSet = hours + ':' + minutes.substr(-2) 
  
  

  
  const dayData = response?.list?.[0];
// @ts-ignore
  let windSpeed = response?.list?.[0]?.speed;
  // @ts-ignore
  let pressure = response?.list?.[0]?.pressure;
    // @ts-ignore
let rain = (response?.list?.[0]?.pop)*100;
  

  if (!dayData) {
    return <div>No weather data available</div>;
  }

  const { feels_like, weather } = dayData;
  const degree = feels_like?.day ?? 0;

  function emoji(degree: number) {
    return degree < 0 ? "❄️" : degree < 15 ? "🌫️" : "🌤️";
  }

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', gap: '105px', padding:'10px'}} className="firstrow">
        <p>
          {emoji(degree)} {`${degree} °C`}
        </p>
        <p>{`${weather?.[0]?.main}, ${weather?.[0]?.description} `}</p>
      </div>
      <div className="secondrow" style={{display:'flex', justifyContent: 'space-between',padding:'10px',paddingRight:'20px'}}>
        <p>
        🌅 {formattedTimeRise}
        </p>
        <p>
        🌇 {formattedTimeSet}
        </p>
      </div>
      <div className="thirdrow" style={{display:'flex', justifyContent: 'space-between',padding:'10px'}}>
        <p>{`𖣘 ${windSpeed} m/s`}</p>
        <p>{`🌧️ ${rain}%`}</p>
        <p>{`🗜 ${pressure} hPa`}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;