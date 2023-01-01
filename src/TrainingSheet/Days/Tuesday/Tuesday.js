import React from "react";
import classes from '../../Grid.module.css';

const Tuesday = (props) => {
    const squatProgression = [
      props.squatTrainingMax * 0.75 + "kg x5",
      props.squatTrainingMax * 0.85 + "kg x3",
      props.squatTrainingMax * 0.95 + "kg x1+",
      props.squatTrainingMax * 0.9 + "kg x3",
      props.squatTrainingMax * 0.85 + "kg x3",
      props.squatTrainingMax * 0.8 + "kg x3",
      props.squatTrainingMax * 0.75 + "kg x5",
      props.squatTrainingMax * 0.7 + "kg x5",
      props.squatTrainingMax * 0.65 + "kg x5+",
    ];
  
    const sumoDeadliftProgression = [
      props.deadliftTrainingMax * 0.5 + "kg x5",
      props.deadliftTrainingMax * 0.6 + "kg x5",
      props.deadliftTrainingMax * 0.7 + "kg x3",
      props.deadliftTrainingMax * 0.7 + "kg x5",
      props.deadliftTrainingMax * 0.7 + "kg x7",
      props.deadliftTrainingMax * 0.7 + "kg x4",
      props.deadliftTrainingMax * 0.7 + "kg x6",
      props.deadliftTrainingMax * 0.7 + "kg x8",
      " ",
    ];
  
    const squat = squatProgression.map((set) => {
      return (
        <div>
          <p key={squatProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    const sumoDeadlift = sumoDeadliftProgression.map((set) => {
      return (
        <div>
          <p key={sumoDeadliftProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    return (
      <div>
        <h3>{props.nameVariant}</h3>
        <div className={classes.grid}>
          <div>
            <p>Przysiad</p>
          </div>
          {squat}
        </div>
        <div className={classes.grid}>
          <div>
            <p>Martwy ciąg sumo</p>
          </div>
          {sumoDeadlift}
        </div>
        <div className={classes.assistance}>
          <div>
            <p>Asysty</p>
          </div>
          <div>
            <p>Nogi, brzuch</p>
          </div>
        </div>
      </div>
    );
  };

export default Tuesday