import React from "react";
import classes from "../../Grid.module.css";

const Saturday6d = (props) => {
  const frontSquatProgression = [
    props.squatTrainingMax * 0.727 + "kg x3",
    props.squatTrainingMax * 0.727 + "kg x3",
    props.squatTrainingMax * 0.727 + "kg x3+",
    props.squatTrainingMax * 0.727 + "kg x3",
    props.squatTrainingMax * 0.727 + "kg x3",
    props.squatTrainingMax * 0.727 + "kg x3",
    props.squatTrainingMax * 0.727 + "kg x3",
    props.squatTrainingMax * 0.727 + "kg x3",
    " "
  ];

  const deadliftProgression = [
    props.deadliftTrainingMax * 0.5625 + "kg x3",
    props.deadliftTrainingMax * 0.5625 + "kg x3",
    props.deadliftTrainingMax * 0.5625 + "kg x3",
    props.deadliftTrainingMax * 0.5625 + "kg x3",
    props.deadliftTrainingMax * 0.5625 + "kg x3",
    props.deadliftTrainingMax * 0.5625 + "kg x3",
    " ",
    " ",
    " "
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
      <h3>Sobota</h3>
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

export default Saturday6d;
