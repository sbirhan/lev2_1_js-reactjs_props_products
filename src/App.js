import React from 'react';
import "./App.css"
import SongItem from './Components/SongItem';

var weatherList = [
  {
    title : "CLOUDY",
    description : "characterized by clouds",
    follower : "liked by melancholics peoples",
    image : "cloudy"
  },
  {
    title : "SUNNY",
    description : "characterized by sunlight",
    follower : "liked by cheerful peoples",
    image : "sunny"
  },
  {
    title : "RAINY",
    description : "characterized by rainfal",
    follower : "liked by romantic peoples",
    image : "rainy"
  },
  {
    title : "SNOWY",
    description : "characterized by snowfall",
    follower : "liked by peoples who are healthy",
    image : "snowy"
  },
  {
    title : "WINDY",
    description : "characterized by strong winds",
    follower : "liked by annoyed peoples",
    image : "windy"
  },
]


function App() {
  return (
    <div className = "containerItems">
      {weatherList.map(weatherList => (
        <SongItem
          title = {weatherList.title}
          description = {weatherList.description}
          follower = {weatherList.follower}
          image = {weatherList.image}
        />
      )
        )}
    </div>
  );
}

export default App;
