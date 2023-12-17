import { cardStyle } from "../../shared/constants";

function LocationInfo({
  searchInput,
  response,
}: {
  searchInput: string;
  response: object;
}) {
// @ts-ignore
if(response.cod == 404){
  return <div>No location data available</div>;
}

  function formatTodayDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const dayOfMonth = today.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[today.getMonth()];

    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${monthName}`;

    return formattedDate;
  }

  const todayFormatted = formatTodayDate();

  const divStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column" as "column",
  };

  const combinedStyles = {
    ...divStyles,
    ...cardStyle,
  };
// @ts-ignore
const formattedPopulation = response?.city?.population.toLocaleString()

  return (
    <div style={combinedStyles}>
      
      <h2>
        {/* @ts-ignore */}
        {response?.city?.name}{`, ${response?.city?.country}`}
      </h2>
      <p>{todayFormatted}</p>
      {/* @ts-ignore */}
      <p>Population: {formattedPopulation}</p>
    </div>
  );
}

export default LocationInfo;