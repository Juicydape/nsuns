import React, { useState, Fragment } from "react";
import classes from "./DayTemplate.module.scss";
import { r2p5 } from "../../roundingLogic.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const DayTemplate = (props) => {
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
        r2p5(props.benchTrainingMax * 0.65) + "kg x8",
        r2p5(props.benchTrainingMax * 0.75) + "kg x6",
        r2p5(props.benchTrainingMax * 0.85) + "kg x4",
        r2p5(props.benchTrainingMax * 0.85) + "kg x4",
        r2p5(props.benchTrainingMax * 0.85) + "kg x4",
        r2p5(props.benchTrainingMax * 0.8) + "kg x5",
        r2p5(props.benchTrainingMax * 0.75) + "kg x6",
        r2p5(props.benchTrainingMax * 0.7) + "kg x7",
        r2p5(props.benchTrainingMax * 0.65) + "kg x8+",
      ],
      [
        r2p5(props.pressTrainingMax * 0.5) + "kg x6",
        r2p5(props.pressTrainingMax * 0.6) + "kg x5",
        r2p5(props.pressTrainingMax * 0.7) + "kg x3",
        r2p5(props.pressTrainingMax * 0.7) + "kg x5",
        r2p5(props.pressTrainingMax * 0.7) + "kg x7",
        r2p5(props.pressTrainingMax * 0.7) + "kg x4",
        r2p5(props.pressTrainingMax * 0.7) + "kg x6",
        r2p5(props.pressTrainingMax * 0.7) + "kg x8",
        " ",
      ],
    ],
    //Tuesday
    [
      [
        r2p5(props.squatTrainingMax * 0.75) + "kg x5",
        r2p5(props.squatTrainingMax * 0.85) + "kg x3",
        r2p5(props.squatTrainingMax * 0.95) + "kg x1+",
        r2p5(props.squatTrainingMax * 0.9) + "kg x3",
        r2p5(props.squatTrainingMax * 0.85) + "kg x3",
        r2p5(props.squatTrainingMax * 0.8) + "kg x3",
        r2p5(props.squatTrainingMax * 0.75) + "kg x5",
        r2p5(props.squatTrainingMax * 0.7) + "kg x5",
        r2p5(props.squatTrainingMax * 0.65) + "kg x5+",
      ],
      [
        r2p5(props.deadliftTrainingMax * 0.5) + "kg x5",
        r2p5(props.deadliftTrainingMax * 0.6) + "kg x5",
        r2p5(props.deadliftTrainingMax * 0.7) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.7) + "kg x5",
        r2p5(props.deadliftTrainingMax * 0.7) + "kg x7",
        r2p5(props.deadliftTrainingMax * 0.7) + "kg x4",
        r2p5(props.deadliftTrainingMax * 0.7) + "kg x6",
        r2p5(props.deadliftTrainingMax * 0.7) + "kg x8",
        " ",
      ],
    ],
    //Thursday
    [
      [
        r2p5(props.benchTrainingMax * 0.75) + "kg x5",
        r2p5(props.benchTrainingMax * 0.85) + "kg x3",
        r2p5(props.benchTrainingMax * 0.95) + "kg x1+",
        r2p5(props.benchTrainingMax * 0.9) + "kg x3",
        r2p5(props.benchTrainingMax * 0.85) + "kg x3",
        r2p5(props.benchTrainingMax * 0.8) + "kg x3",
        r2p5(props.benchTrainingMax * 0.75) + "kg x3",
        r2p5(props.benchTrainingMax * 0.7) + "kg x3",
        r2p5(props.benchTrainingMax * 0.65) + "kg x3",
      ],
      [
        r2p5(props.benchTrainingMax * 0.5) + "kg x6",
        r2p5(props.benchTrainingMax * 0.6) + "kg x5",
        r2p5(props.benchTrainingMax * 0.7) + "kg x3",
        r2p5(props.benchTrainingMax * 0.7) + "kg x5",
        r2p5(props.benchTrainingMax * 0.7) + "kg x7",
        r2p5(props.benchTrainingMax * 0.7) + "kg x4",
        r2p5(props.benchTrainingMax * 0.7) + "kg x6",
        r2p5(props.benchTrainingMax * 0.7) + "kg x8",
        " ",
      ],
    ],
    //Friday
    [
      [
        r2p5(props.deadliftTrainingMax * 0.75) + "kg x5",
        r2p5(props.deadliftTrainingMax * 0.85) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.95) + "kg x1+",
        r2p5(props.deadliftTrainingMax * 0.9) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.85) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.8) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.75) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.7) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.65) + "kg x3+",
      ],
      [
        r2p5(props.squatTrainingMax * 0.35) + "kg x5",
        r2p5(props.squatTrainingMax * 0.45) + "kg x5",
        r2p5(props.squatTrainingMax * 0.55) + "kg x3",
        r2p5(props.squatTrainingMax * 0.55) + "kg x5",
        r2p5(props.squatTrainingMax * 0.55) + "kg x7",
        r2p5(props.squatTrainingMax * 0.55) + "kg x4",
        r2p5(props.squatTrainingMax * 0.55) + "kg x6",
        r2p5(props.squatTrainingMax * 0.55) + "kg x8",
        " ",
      ],
    ],
    //Wednesday5d
    [
      [
        r2p5(props.pressTrainingMax * 0.75) + "kg x5",
        r2p5(props.pressTrainingMax * 0.85) + "kg x3",
        r2p5(props.pressTrainingMax * 0.95) + "kg x1+",
        r2p5(props.pressTrainingMax * 0.9) + "kg x3",
        r2p5(props.pressTrainingMax * 0.85) + "kg x3",
        r2p5(props.pressTrainingMax * 0.8) + "kg x3",
        r2p5(props.pressTrainingMax * 0.75) + "kg x5",
        r2p5(props.pressTrainingMax * 0.7) + "kg x5",
        r2p5(props.pressTrainingMax * 0.65) + "kg x5+",
      ],
      [
        r2p5(props.benchTrainingMax * 0.4) + "kg x6",
        r2p5(props.benchTrainingMax * 0.5) + "kg x5",
        r2p5(props.benchTrainingMax * 0.6) + "kg x3",
        r2p5(props.benchTrainingMax * 0.6) + "kg x5",
        r2p5(props.benchTrainingMax * 0.6) + "kg x7",
        r2p5(props.benchTrainingMax * 0.6) + "kg x4",
        r2p5(props.benchTrainingMax * 0.6) + "kg x6",
        r2p5(props.benchTrainingMax * 0.6) + "kg x8",
        " ",
      ],
    ],
    //Saturday6d
    [
      [
        r2p5(props.squatTrainingMax * 0.727) + "kg x3",
        r2p5(props.squatTrainingMax * 0.727) + "kg x3",
        r2p5(props.squatTrainingMax * 0.727) + "kg x3+",
        r2p5(props.squatTrainingMax * 0.727) + "kg x3",
        r2p5(props.squatTrainingMax * 0.727) + "kg x3",
        r2p5(props.squatTrainingMax * 0.727) + "kg x3",
        r2p5(props.squatTrainingMax * 0.727) + "kg x3",
        r2p5(props.squatTrainingMax * 0.727) + "kg x3",
        " ",
      ],
      [
        r2p5(props.deadliftTrainingMax * 0.5625) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.5625) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.5625) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.5625) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.5625) + "kg x3",
        r2p5(props.deadliftTrainingMax * 0.5625) + "kg x3",
        " ",
        " ",
        " ",
      ],
    ],
  ];

  const primaryExerciseName =
    props.arrayNo === 0
      ? "Wyciskanie płasko"
      : props.arrayNo === 1
      ? "Przysiad"
      : props.arrayNo === 2
      ? "Wyciskanie płasko"
      : props.arrayNo === 3
      ? "Martwy ciąg"
      : props.arrayNo === 4
      ? "Wyciskanie żołnierskie"
      : props.arrayNo === 5
      ? "Martwy ciąg"
      : null;

  const primaryExercise = progressions[props.arrayNo][0].map((set) => {
    return <td>{set}</td>;
  });

  const secondaryExerciseName =
    props.arrayNo === 0
      ? "Wyciskanie żołnierskie"
      : props.arrayNo === 1
      ? "Martwy ciąg sumo"
      : props.arrayNo === 2
      ? "Wyciskanie wąsko"
      : props.arrayNo === 3
      ? "Przysiad przedni"
      : props.arrayNo === 4
      ? "Wyciskanie na skosie"
      : props.arrayNo === 5
      ? "Przysiad przedni"
      : null;

  const secondaryExercise = progressions[props.arrayNo][1].map((set) => {
    return <td>{set}</td>;
  });

  const accesories =
    props.arrayNo === 0
      ? "Klatka, ramiona, plecy"
      : props.arrayNo === 1
      ? "Nogi, brzuch"
      : props.arrayNo === 2
      ? "Ramiona, inne"
      : props.arrayNo === 3
      ? "Plecy, brzuch"
      : props.arrayNo === 4
      ? "Barki, klatka"
      : props.arrayNo === 5
      ? "Góra pleców, nogi"
      : null;

      const tableCaptionOffset = {"transform": showSection ? "translateY(0)" : "translateY(5px)"}

      const arrowIconBtn = showSection ? (
        <FontAwesomeIcon icon={solid("arrow-up")} />
      ) : (
        <FontAwesomeIcon icon={solid("arrow-down")} />
      )

      
  return (
    <table>
      <caption style={tableCaptionOffset}>
        {props.nameVariant + " "}
        <button onClick={handleShowSection} className={classes.faIcon}>
          {arrowIconBtn}
        </button>
      </caption>

      {showSection && (
        <Fragment>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Seria 1</th>
              <th scope="col">Seria 2</th>
              <th scope="col">Seria 3</th>
              <th scope="col">Seria 4</th>
              <th scope="col">Seria 5</th>
              <th scope="col">Seria 6</th>
              <th scope="col">Seria 7</th>
              <th scope="col">Seria 8</th>
              <th scope="col">Seria 9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{primaryExerciseName}</td>
              {primaryExercise}
            </tr>
            <tr>
              <td>{secondaryExerciseName}</td>
              {secondaryExercise}
            </tr>
            <tr>
              <td>Akcesoria</td>
              <td colSpan={9}>{accesories}</td>
            </tr>
          </tbody>
        </Fragment>
      )}
    </table>
  );
};

export default DayTemplate;
