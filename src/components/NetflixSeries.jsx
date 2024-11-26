import seriesData from "../api/seriesData.json"
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
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img src={curElem.img_url} height={300} width={400}></img>
            </div>
            <h2>Name:{curElem.name} </h2>
            <h3>Rating:{curElem.rating}</h3>
            <p>Summary :{curElem.description}</p>
            <p>Genre: {curElem.genre}</p>
            <p>Cast: {curElem.cast}</p>
            <a href={curElem.watch_url} target="_blank">
              <button>Watch Now</button></a>
          </li>
        );
      })}
    </ul>
  )
};


