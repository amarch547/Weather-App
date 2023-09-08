
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

const Weather = () => {

  const [data, setData] = useState({
    celcius: 27,
    name: 'Lucknow',
    humidity: 92,
    speed: 2
  })

  useEffect(() => {
    const apiUrl = 'https://api.tomorrow.io/v4/weather/realtime?location=lucknow&apikey=YnQ8E5paghcejYou7J6Soc0IB6PkkwwT'
    axios.get(apiUrl)
      .then(res => {
        console.log(res.data)
        setData({
          ...data,
          time: res.data.data.time,
          celcius: res.data.data.values.temperature,
          name: res.data.location.name,
          humidity: res.data.data.values.humidity,
          speed: res.data.data.values.windSpeed
        })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container">
      <div className="weather">

        <div>{data.time}</div>
        <div className="winfo">
          <img src="/images/cloud.png" alt="" className='icon' />
          <h1>{Math.round(data.celcius)}°C</h1>
          <h2>{data.name}</h2>
        </div>

        <div className="details">

          <div className="col">
            <div className="humidity">
              <p>{Math.round(data.humidity)}%</p>
              <p>Humidity</p>
            </div>
          </div>

          <div className="col">
            <div className="wind">
              <p>{data.speed}Km/h</p>
              <p>Wind</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Weather;

