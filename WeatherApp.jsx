import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 12.87,
        humidity: 94,
        temp: 13.05,
        tempMax: 13.05,
        tempMin: 13.05,
        weather: "fog"
    });
    let updateInfo = (newinfo) => {
       setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Nithya</h2>
            <SearchBox  updateInfo = {updateInfo}/>
            <br></br>
            <InfoBox info = {weatherInfo} />
        </div>
    );
}