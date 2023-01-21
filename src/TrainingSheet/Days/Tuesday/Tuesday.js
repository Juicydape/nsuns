import React, { useState, Fragment } from "react";
import classes from "../../Grid.module.scss";
import { roundToTwoPointFive } from "../../../roundingLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Tuesday = (props) => {
  const [showSection, setShowSection] = useState(true);

  const handleShowSection = () => {
    setShowSection((prevState) => {
      return !prevState;
    });
  };

  const squatProgression = [
    roundToTwoPointFive(props.squatTrainingMax * 0.75) + "kg x5",
    roundToTwoPointFive(props.squatTrainingMax * 0.85) + "kg x3",
    roundToTwoPointFive(props.squatTrainingMax * 0.95) + "kg x1+",
    roundToTwoPointFive(props.squatTrainingMax * 0.9) + "kg x3",
    roundToTwoPointFive(props.squatTrainingMax * 0.85) + "kg x3",
    roundToTwoPointFive(props.squatTrainingMax * 0.8) + "kg x3",
    roundToTwoPointFive(props.squatTrainingMax * 0.75) + "kg x5",
    roundToTwoPointFive(props.squatTrainingMax * 0.7) + "kg x5",
    roundToTwoPointFive(props.squatTrainingMax * 0.65) + "kg x5+",
  ];

  const sumoDeadliftProgression = [
    roundToTwoPointFive(props.deadliftTrainingMax * 0.5) + "kg x5",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.6) + "kg x5",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x3",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x5",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x7",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x4",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x6",
    roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x8",
    " ",
  ];

  const squat = squatProgression.map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        key={squatProgression.indexOf}
      >
        {set}
      </p>
    );
  });

  const sumoDeadlift = sumoDeadliftProgression.map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        key={sumoDeadliftProgression.indexOf}
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
            <p className={classes["day-container__exercise-title"]}>Przysiad</p>
            {squat}
          </div>
          <div className={classes["day-container__grid"]}>
            <p className={classes["day-container__exercise-title"]}>
              Martwy ciąg sumo
            </p>
            {sumoDeadlift}
          </div>
          <div className={classes["day-container__assistance-work"]}>
            <p className={classes["day-container__exercise-title"]}>Asysty</p>
            <p className={classes["day-container__exercise"]}>Nogi, brzuch</p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Tuesday;
