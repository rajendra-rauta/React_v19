// import App.css fr 
export const App = () => {
  // const value = "Rajendra Rauta"
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />

    </>
  );
};

const NetflixSeries = () => {
  const name = "Rajendra Rauta"
  const ph = "7846828248"



  let  age = 25
  // let canWatch = "Watch Now"
  // if(age<=18) canWatch = "Not Avilable";

  const canWatch = () => {
    if(age>=18)  return "Watch Now" ;
    return "Not avilable"; 
  };

  return (

    <div>
      <div>
        <img src="img.jpg" height={300} width={400}></img>
      </div>
      <h2>Name {name} </h2>
      <h3>{ph}</h3>
      <h3>hello</h3>
      <p></p>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Avilabe!"}</button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </div>

  )
}
