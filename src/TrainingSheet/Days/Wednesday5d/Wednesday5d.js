import React, { useState, Fragment } from "react";
import classes from "../../Grid.module.scss";
import { roundToTwoPointFive } from "../../../roundingLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Wednesday5d = (props) => {
  const [showSection, setShowSection] = useState(true);

  const handleShowSection = () => {
    setShowSection((prevState) => {
      return !prevState;
    });
  };

  const pressProgression = [
    roundToTwoPointFive(props.pressTrainingMax * 0.75) + "kg x5",
    roundToTwoPointFive(props.pressTrainingMax * 0.85) + "kg x3",
    roundToTwoPointFive(props.pressTrainingMax * 0.95) + "kg x1+",
    roundToTwoPointFive(props.pressTrainingMax * 0.9) + "kg x3",
    roundToTwoPointFive(props.pressTrainingMax * 0.85) + "kg x3",
    roundToTwoPointFive(props.pressTrainingMax * 0.8) + "kg x3",
    roundToTwoPointFive(props.pressTrainingMax * 0.75) + "kg x5",
    roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x5",
    roundToTwoPointFive(props.pressTrainingMax * 0.65) + "kg x5+",
  ];

  const inclineBenchProgression = [
    roundToTwoPointFive(props.benchTrainingMax * 0.4) + "kg x6",
    roundToTwoPointFive(props.benchTrainingMax * 0.5) + "kg x5",
    roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x3",
    roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x5",
    roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x7",
    roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x4",
    roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x6",
    roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x8",
    " ",
  ];

  const press = pressProgression.map((set) => {
    return <p 
    className={classes["day-container__exercise"]}
    key={pressProgression.indexOf}>{set}</p>;
  });

  const inclineBench = inclineBenchProgression.map((set) => {
    return <p 
    className={classes["day-container__exercise"]}
    key={inclineBenchProgression.indexOf}>{set}</p>;
  });

  return (
    <div className={classes["day-container"]}>
      <h3 className={classes["day-container__title"]}>
        Środa <button
          className={classes["day-container__fold-icon"]}
          onClick={handleShowSection}
        >
          {showSection ? (
            <FontAwesomeIcon icon={solid("arrow-up")} />
          ) : (
            <FontAwesomeIcon icon={solid("arrow-down")} />
          )}
        </button>
      </h3>
      {showSection && (
        <Fragment>
          <div className={classes["day-container__grid"]}>
            <p className={classes["day-container__exercise-title"]}>
              Wyciskanie żołnierskie
            </p>
            {press}
          </div>
          <div className={classes["day-container__grid"]}>
            <p className={classes["day-container__exercise-title"]}>
              Wyciskanie na skosie górnym
            </p>
            {inclineBench}
          </div>
          <div className={classes["day-container__assistance-work"]}>
            <p className={classes["day-container__exercise-title"]}>Asysty</p>
            <p className={classes["day-container__exercise"] + " " + classes["day-container__exercise--assistance"]}>Nogi, brzuch</p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Wednesday5d;
