import seriesData from "../api/seriesData.json"
import {SeriesCard} from "./SeriesCard"
export const NetflixSeries = () => {
  //   const name = "Rajendra Rauta"
  //   const ph = "7846828248"



  //   let age = 25
  //   // let canWatch = "Watch Now"
  //   // if(age<=18) canWatch = "Not Avilable";

  //   const canWatch = () => {
  //     if (age >= 18) return "Watch Now";
  //     return "Not avilable";
  //   };

  return (
    <ul>
      {seriesData.map((curElem) => (

        <SeriesCard key={curElem.id} curElem={curElem} />

      ))}
    </ul>
  )
};


