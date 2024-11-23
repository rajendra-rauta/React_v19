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
  const ph= "7846828248"
  return (

    <div>
      <div>
        <img src="img.jpg" height={300} width={400}></img>
      </div>
      <h2>Name {name} </h2>
      <h3>-{ph}</h3>
      <h3>-hello</h3>
      <p></p>
    </div>

  )
}
