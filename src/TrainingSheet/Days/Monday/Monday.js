import React from "react";
import classes from '../../Grid.module.css'
import { roundToTwoPointFive } from './roundingLogic'


const Monday = (props) => {

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
        <div>
          <p key={benchProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    const militaryPress = pressProgression.map((set) => {
      return (
        <div>
          <p key={pressProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    return (
      <div>
        <h3>Poniedziałek</h3>
        <div className={classes.grid}>
          <div>
            <p>Wyciskanie płasko</p>
          </div>
          {benchPress}
        </div>
        <div className={classes.grid}>
          <div>
            <p>Wyciskanie żołnierskie</p>
          </div>
          {militaryPress}
        </div>
        <div className={classes.assistance}>
          <div>
            <p>Asysty</p>
          </div>
          <div>
            <p>Klatka, ramiona, plecy</p>
          </div>
        </div>
      </div>
    );
  };

  export default Monday