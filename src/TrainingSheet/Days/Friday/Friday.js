import React from 'react';
import classes from '../../Grid.module.css'

const Friday = (props) => {
    const frontSquatProgression = [
      props.squatTrainingMax * 0.35 + "kg x5",
      props.squatTrainingMax * 0.45 + "kg x5",
      props.squatTrainingMax * 0.55 + "kg x3",
      props.squatTrainingMax * 0.55 + "kg x5",
      props.squatTrainingMax * 0.55 + "kg x7",
      props.squatTrainingMax * 0.55 + "kg x4",
      props.squatTrainingMax * 0.55 + "kg x6",
      props.squatTrainingMax * 0.55 + "kg x8",
      " ",
    ];
  
    const deadliftProgression = [
      props.deadliftTrainingMax * 0.75 + "kg x5",
      props.deadliftTrainingMax * 0.85 + "kg x3",
      props.deadliftTrainingMax * 0.95 + "kg x1+",
      props.deadliftTrainingMax * 0.9 + "kg x3",
      props.deadliftTrainingMax * 0.85 + "kg x3",
      props.deadliftTrainingMax * 0.8 + "kg x3",
      props.deadliftTrainingMax * 0.75 + "kg x3",
      props.deadliftTrainingMax * 0.7 + "kg x3",
      props.deadliftTrainingMax * 0.65 + "kg x3+",
    ];
  
    const deadlift = deadliftProgression.map((set) => {
      return (
        <div>
          <p key={deadliftProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    const frontSquat = frontSquatProgression.map((set) => {
      return (
        <div>
          <p key={frontSquatProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    return (
      <div>
        <h3>{props.nameVariant}</h3>
        <div className={classes.grid}>
          <div>
            <p>Martwy Ciąg</p>
          </div>
          {deadlift}
        </div>
        <div className={classes.grid}>
          <div>
            <p>Przysiad przedni</p>
          </div>
          {frontSquat}
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

  export default Friday