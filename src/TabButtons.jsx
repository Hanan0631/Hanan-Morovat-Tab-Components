import { useState } from "react";
import styles from "./TabButtons.module.css";

function TabButtons({ animals }) {
  const [animal, setAnimal] = useState(0);

  return (
    <>
      <div className={styles.tabButtons}>
        {animals.map((item, index) => (
          <h4
            className={index === animal ? styles.active : ""}
            onClick={() => setAnimal(index)}
            key={item.id}
          >
            {item.name}
          </h4>
        ))}
      </div>
      <div className={styles.cardsContainer}>
        <img src={animals[animal].image} />
        <p>{animals[animal].description}</p>
      </div>
    </>
  );
}

export default TabButtons;
