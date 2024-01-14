import React, { useState } from 'react'
import "./Weatherapp.css"
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
const Weatherapp = () => {
  let apikey="6332bf65093ac5324487608148f10894"
  const [wicon,setwicon]=useState(cloud_icon)

  const search = async()=>{
const element=document.getElementsByClassName("cityinput");
if(element[0].value===""){
  return 0;
}
let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&lon=10.99&appid=${apikey}`
let response=await fetch(url);
let data=await response.json();
const humidity=document.getElementsByClassName("humiditypercentage");
const wind=document.getElementsByClassName("windrate")
const temp=document.getElementsByClassName("weathertemp");
const location=document.getElementsByClassName("weatherlocation");

humidity[0].innerHTML=data.main.humidity +"%";
wind[0].innerHTML=data.wind.speed + "Km/h";
temp[0].innerHTML=data.main.temp + "°c";
location[0].innerHTML=data.name;

if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
{  setwicon(clear_icon);}
  
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
{  setwicon(cloud_icon);}

else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
{  setwicon(drizzle_icon);}

else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
{  setwicon(drizzle_icon);}

else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
{  setwicon(rain_icon);}

else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
{  setwicon(rain_icon);}

else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
{  setwicon(snow_icon);}

else{
  setwicon(clear_icon);
}

  }
  
  return (
    <div className='container'>
      
<div className='topbar'>
    <input type='text' className='cityinput' placeholder='Enter City Name'></input>
<div className='searchicon' onClick={()=>{search()}}>
<img src={search_icon} alt="" />
</div>
</div>
<div className='weatherimage'>
  <img src={wicon} alt="" />
</div>
<div className="weathertemp">24°c</div>
<div className="weatherlocation">London</div>
<div className="datacontainer">
  <div className="element">
    <img src={humidity_icon} alt=""  className='icon'/>
    <div className="data">
      <div className="humiditypercentage">64%</div>
      <div className="text">Humidity</div>
    </div>
  </div>
  <div className="element">
    <img src={wind_icon} alt=""  className='icon'/>
    <div className="data">
      <div className="windrate">18km/h</div>
      <div className="text">WindSpeed</div>
    </div>
  </div>

</div>
    </div>
  )
}

export default Weatherapp;