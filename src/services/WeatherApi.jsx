import { useEffect, useState } from 'react'

function WeatherApi() { 
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('https://api.weatherapi.com/v1/current.json?key=f79e9dba1996469f96c140919262601&q=stockholm&aqi=no')
  .then((response) => {
    if (!response.ok) {
        console.log(response.status);
        throw new Error("Request failed status: " + response.status)
    }
    return response.json();
  })
  .then((data) => {
    setWeather(data);
    setLoading(false);
  })
  .catch((error) => {
    setError(error.message);
    setLoading(false);
  })
        
    }, []);

    if (loading) {
        return <p>Data laddas...</p>
    }

    if (error) { 
        return <p>Error, {error}</p>
    }

  return (
    <>
    <section className='weather'>
    <img src={weather.current.condition.icon} alt="weather icon" />
    <p className='weathercelsius'>{weather.current.temp_c} °C</p>
    <p className='weathericon'>{weather.location.name}</p>
    </section>
    </>
  )
}

export default WeatherApi