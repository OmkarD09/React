import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ff4a8f8c2663f17bf47131ef1d9c84f`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div className="WeatherApp">
            <SearchBox onSearch={handleSearch} />
            <InfoBox weatherData={weatherData} />
        </div>
    );
}