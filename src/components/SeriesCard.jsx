
export const SeriesCard = ({data}) =>{
    // eslint-disable-next-line react/prop-types
    const {id,img_url,name,rating,description,cast,genre,watch_url} =data;
    return (
        <li className="card">
          <div>
            <img src={img_url} height={300} width={400}></img>
          </div>
          <div className="card-contain">
          <h2>Name:{name} </h2>
          <h3>Rating:{rating}</h3>
          <p>Summary :{description}</p>
          <p>Genre: {genre}</p>
          <p>Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button>Watch Now</button></a>
            </div>
        </li>
      );
}






