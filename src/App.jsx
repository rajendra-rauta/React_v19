import { NetflixSeries } from "./components/NetflixSeries";
// import "./components/Netflix.css";
import styles from "./components/Netflix.module.css";


export const App = () => {
  // const value = "Rajendra Rauta"
  return (
 
      <section >   
      <h1 className={styles["card-heading"]}>List of Best Netflix Series</h1>
        <NetflixSeries />
      </section>
   
  );
};



