import React, { useState, Fragment } from "react";
import classes from "../../Grid.module.scss";
import { roundToTwoPointFive } from "../../../roundingLogic";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Friday = (props) => {
  const [showSection, setShowSection] = useState(true);

  const handleShowSection = () => {
    setShowSection((prevState) => {
      return !prevState;
    });
  };

  const frontSquatProgression = [
    roundToTwoPointFive(props.squatTrainingMax * 0.35) + "kg x5",
    roundToTwoPointFive(props.squatTrainingMax * 0.45) + "kg x5",
    roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x3",
    roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x5",
    roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x7",
    roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x4",
    roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x6",
    roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x8",
    " ",
  ];

  const deadliftProgression = [
    roundToTwoPointFive(props.deadliftTrainingMax * 0.75) + "kg x5",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.85) + "kg x3",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.95) + "kg x1+",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.9) + "kg x3",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.85) + "kg x3",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.8) + "kg x3",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.75) + "kg x3",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x3",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.65) + "kg x3+",
  ];

  const deadlift = deadliftProgression.map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        key={deadliftProgression.indexOf}
      >
        {set}
      </p>
    );
  });

  const frontSquat = frontSquatProgression.map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        key={frontSquatProgression.indexOf}
      >
        {set}
      </p>
    );
  });

  return (
    <div className={classes["day-container"]}>
      <h3 className={classes["day-container__title"]}>
        {props.nameVariant}{" "}
        <button
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
              Martwy Ciąg
            </p>
            {deadlift}
          </div>
          <div className={classes["day-container__grid"]}>
            <p className={classes["day-container__exercise-title"]}>
              Przysiad przedni
            </p>
            {frontSquat}
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

export default Friday;
