import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "jaipur",
        feelsLike: 30.6,
        humidity: 54,
        temp: 29.29,
        tempMax: 29.29,
        tempMin: 29.29,
        weather: "scattered clouds",
    });

    let updateInfo= (newinfo) => {
        setWeatherInfo(newinfo);
    }; 

    return (
        <div style={{textAlign: "center"}}>
            <h2>WeatherApp</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}

