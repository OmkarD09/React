import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { WbSunny, AcUnit, Thunderstorm } from '@mui/icons-material';

export default function InfoBox({ weatherData }) {
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a53c17?q=80&w=1935&auto=format&fit=crop";

    if (!weatherData || !weatherData.main) {
        return null;
    }

    const tempCelsius = (weatherData.main.temp - 273.15).toFixed(2);

    return (
        <div className="InfoBox" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Card sx={{ width: 400 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={weatherData.main.humidity > 80 ? RAIN_URL : tempCelsius > 15 ? HOT_URL : COLD_URL}
                    title="weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherData.name} {
                            weatherData.main.humidity > 80
                                ? <Thunderstorm />
                                : (tempCelsius > 15 ? <WbSunny /> : <AcUnit />)
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        <p>Temperature: {tempCelsius} °C</p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
