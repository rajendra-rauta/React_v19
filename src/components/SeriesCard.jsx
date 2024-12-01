
export const SeriesCard = ({data}) =>{
    // eslint-disable-next-line react/prop-types
    const {img_url,name,rating,description,cast,genre,watch_url} =data;


    const btn_style = {
      padding:"1.2rem 2.4rem",
              border:"none",
              fontSize:"1.6rem",
              backgroundColor:"var(--btn-hover-bg-color)",
              color :"var(--bg-color)"
            
    }
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
            <button style={btn_style}>Watch Now</button></a>
            </div>
        </li>
      );
}






