import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_ULR = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "16e94fcc228c9ab9014309c6f51e5050";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_ULR}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
        
    };

    let handlechange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit = async (event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    }
    return(
        <div className='searchbox'>
           
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                required 
                value={city}
                onChange={handlechange}
                />
                <br></br>
                <br></br>
                 <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No such place exists!!</p>}
            </form>
        </div>
    )
}


