// import { NetflixSeries } from "./components/NetflixSeries";
// import { EventHandeling } from "./components/EventHandeling";
// import { EventPropagation } from "./components/EventPropagation";
// import { EventProps } from "./components/EventsProps";
// import "./components/Netflix.css";
import "./components/Ev.css";
import styles from "./components/Netflix.module.css";
import { State } from "./hooks/state";
import './index.css'


export const App = () => {
  // const value = "Rajendra Rauta"
  return (

    <section >
      <h1 className={styles["card-heading"]}>List of Best Netflix Series</h1>
      {/* <NetflixSeries /> */}
      {/* <EventHandeling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation /> */}
      <State/>

    </section>

  );
};



