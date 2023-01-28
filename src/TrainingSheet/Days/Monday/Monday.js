import React, { useState, Fragment } from "react";
import classes from "../../Grid.module.scss";
import { roundToTwoPointFive } from "../../../roundingLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Monday = (props) => {
  const [showSection, setShowSection] = useState(true);

  const handleShowSection = () => {
    setShowSection((prevState) => {
      return !prevState;
    });
  };

  const benchProgression = [
    roundToTwoPointFive(props.benchTrainingMax * 0.65) + "kg x8",
    roundToTwoPointFive(props.benchTrainingMax * 0.75) + "kg x6",
    roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x4",
    roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x4",
    roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x4",
    roundToTwoPointFive(props.benchTrainingMax * 0.8) + "kg x5",
    roundToTwoPointFive(props.benchTrainingMax * 0.75) + "kg x6",
    roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x7",
    roundToTwoPointFive(props.benchTrainingMax * 0.65) + "kg x8+",
  ];

  const pressProgression = [
    roundToTwoPointFive(props.pressTrainingMax * 0.5) + "kg x6",
    roundToTwoPointFive(props.pressTrainingMax * 0.6) + "kg x5",
    roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x3",
    roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x5",
    roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x7",
    roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x4",
    roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x6",
    roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x8",
    " ",
  ];

  const benchPress = benchProgression.map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        key={benchProgression.indexOf}
      >
        {set}
      </p>
    );
  });

  const militaryPress = pressProgression.map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        key={pressProgression.indexOf}
      >
        {set}
      </p>
    );
  });

  return (
    <div className={classes["day-container"]}>
      <h3 className={classes["day-container__title"]}>
        Poniedziałek <button
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
              Wyciskanie płasko
            </p>
            {benchPress}
          </div>
          <div className={classes["day-container__grid"]}>
            <p className={classes["day-container__exercise-title"]}>
              Wyciskanie żołnierskie
            </p>
            {militaryPress}
          </div>
          <div className={classes["day-container__assistance-work"]}>
            <p className={classes["day-container__exercise-title"]}>Asysty</p>
            <p className={classes["day-container__exercise"] + " " + classes["day-container__exercise--assistance"]}>
              Klatka, ramiona, plecy
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Monday;
