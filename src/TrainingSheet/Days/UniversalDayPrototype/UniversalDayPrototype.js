import React, { useState, Fragment } from "react";
import classes from "../../Grid.module.scss";
import { roundToTwoPointFive } from "../../../roundingLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const UniversalDayPrototype = (props) => {
  const [showSection, setShowSection] = useState(true);

  const handleShowSection = () => {
    setShowSection((prevState) => {
      return !prevState;
    });
  };

  const progressions = [
    //Monday
    [
      [
        roundToTwoPointFive(props.benchTrainingMax * 0.65) + "kg x8",
        roundToTwoPointFive(props.benchTrainingMax * 0.75) + "kg x6",
        roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x4",
        roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x4",
        roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x4",
        roundToTwoPointFive(props.benchTrainingMax * 0.8) + "kg x5",
        roundToTwoPointFive(props.benchTrainingMax * 0.75) + "kg x6",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x7",
        roundToTwoPointFive(props.benchTrainingMax * 0.65) + "kg x8+",
      ],
      [
        roundToTwoPointFive(props.pressTrainingMax * 0.5) + "kg x6",
        roundToTwoPointFive(props.pressTrainingMax * 0.6) + "kg x5",
        roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x3",
        roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x5",
        roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x7",
        roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x4",
        roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x6",
        roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x8",
        " ",
      ],
    ],
    //Tuesday
    [
      [
        roundToTwoPointFive(props.squatTrainingMax * 0.75) + "kg x5",
        roundToTwoPointFive(props.squatTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.95) + "kg x1+",
        roundToTwoPointFive(props.squatTrainingMax * 0.9) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.8) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.75) + "kg x5",
        roundToTwoPointFive(props.squatTrainingMax * 0.7) + "kg x5",
        roundToTwoPointFive(props.squatTrainingMax * 0.65) + "kg x5+",
      ],
      [
        roundToTwoPointFive(props.deadliftTrainingMax * 0.5) + "kg x5",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.6) + "kg x5",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x5",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x7",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x4",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x6",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x8",
        " ",
      ],
    ],
    //Thursday
    [
      [
        roundToTwoPointFive(props.benchTrainingMax * 0.75) + "kg x5",
        roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.95) + "kg x1+",
        roundToTwoPointFive(props.benchTrainingMax * 0.9) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.8) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.75) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.65) + "kg x3",
      ],
      [
        roundToTwoPointFive(props.benchTrainingMax * 0.5) + "kg x6",
        roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x5",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x5",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x7",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x4",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x6",
        roundToTwoPointFive(props.benchTrainingMax * 0.7) + "kg x8",
        " ",
      ],
    ],
    //Friday
    [
      [
        roundToTwoPointFive(props.squatTrainingMax * 0.35) + "kg x5",
        roundToTwoPointFive(props.squatTrainingMax * 0.45) + "kg x5",
        roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x5",
        roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x7",
        roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x4",
        roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x6",
        roundToTwoPointFive(props.squatTrainingMax * 0.55) + "kg x8",
        " ",
      ],
      [
        roundToTwoPointFive(props.deadliftTrainingMax * 0.75) + "kg x5",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.95) + "kg x1+",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.9) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.8) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.75) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.7) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.65) + "kg x3+",
      ],
    ],
    //Wednesday5d
    [
      [
        roundToTwoPointFive(props.pressTrainingMax * 0.75) + "kg x5",
        roundToTwoPointFive(props.pressTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.pressTrainingMax * 0.95) + "kg x1+",
        roundToTwoPointFive(props.pressTrainingMax * 0.9) + "kg x3",
        roundToTwoPointFive(props.pressTrainingMax * 0.85) + "kg x3",
        roundToTwoPointFive(props.pressTrainingMax * 0.8) + "kg x3",
        roundToTwoPointFive(props.pressTrainingMax * 0.75) + "kg x5",
        roundToTwoPointFive(props.pressTrainingMax * 0.7) + "kg x5",
        roundToTwoPointFive(props.pressTrainingMax * 0.65) + "kg x5+",
      ],
      [
        roundToTwoPointFive(props.benchTrainingMax * 0.4) + "kg x6",
        roundToTwoPointFive(props.benchTrainingMax * 0.5) + "kg x5",
        roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x3",
        roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x5",
        roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x7",
        roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x4",
        roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x6",
        roundToTwoPointFive(props.benchTrainingMax * 0.6) + "kg x8",
        " ",
      ],
    ],
    //Saturday6d
    [
      [
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3+",
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3",
        roundToTwoPointFive(props.squatTrainingMax * 0.727) + "kg x3",
        " ",
      ],
      [
        roundToTwoPointFive(props.deadliftTrainingMax * 0.5625) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.5625) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.5625) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.5625) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.5625) + "kg x3",
        roundToTwoPointFive(props.deadliftTrainingMax * 0.5625) + "kg x3",
        " ",
        " ",
        " ",
      ],
    ],
  ];

  const primaryExercise = progressions[0][0].map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        // key={primaryExercise.indexOf}
      >
        {set}
      </p>
    );
  });

  const secondaryExercise = progressions[0][1].map((set) => {
    return (
      <p
        className={classes["day-container__exercise"]}
        // key={secondaryExercise.indexOf}
      >
        {set}
      </p>
    );
  });

  return (
    <div className={classes["day-container"]}>
      <h3 className={classes["day-container__title"]}>
        {props.nameVariant} <button
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
            {primaryExercise}
          </div>
          <div className={classes["day-container__grid"]}>
            <p className={classes["day-container__exercise-title"]}>
              Wyciskanie wąsko
            </p>
            {secondaryExercise}
          </div>
          <div className={classes["day-container__assistance-work"]}>
            <p className={classes["day-container__exercise-title"]}>Asysty</p>
            <p className={classes["day-container__exercise"] + " " + classes["day-container__exercise--assistance"]}>Ramiona, inne</p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default UniversalDayPrototype;
