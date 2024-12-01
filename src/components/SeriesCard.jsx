import styles from "./Netflix.module.css";
import styled from 'styled-components';

export const SeriesCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { img_url, name, rating, description, cast, genre, watch_url } = data;


  // const btn_style = {}
    const Button = styled.button ({
 
      padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",

    })
    
 
  const rating_class = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} height={300} width={400}></img>
      </div>
      <div className={styles["card-content"]}>
        <h2>Name:{name} </h2>
        <h3>Rating:<span className={`${styles.rating} ${rating_class}`}>{rating}</span></h3>
        <p>Summary :{description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button></a> */}
         <Button> Watch Now</Button> </a>
      </div>
    </li>
  );
}






