import React from "react";
import classes from "../../Grid.module.css";

const Wednesday5d = (props) => {
  const pressProgression = [
    props.pressTrainingMax * 0.75 + "kg x5",
    props.pressTrainingMax * 0.85 + "kg x3",
    props.pressTrainingMax * 0.95 + "kg x1+",
    props.pressTrainingMax * 0.9 + "kg x3",
    props.pressTrainingMax * 0.85 + "kg x3",
    props.pressTrainingMax * 0.8 + "kg x3",
    props.pressTrainingMax * 0.75 + "kg x5",
    props.pressTrainingMax * 0.7 + "kg x5",
    props.pressTrainingMax * 0.65 + "kg x5+",
  ];

  const inclineBenchProgression = [
    props.benchTrainingMax * 0.40 + "kg x6",
    props.benchTrainingMax * 0.50 + "kg x5",
    props.benchTrainingMax * 0.60 + "kg x3",
    props.benchTrainingMax * 0.60 + "kg x5",
    props.benchTrainingMax * 0.60 + "kg x7",
    props.benchTrainingMax * 0.60 + "kg x4",
    props.benchTrainingMax * 0.60 + "kg x6",
    props.benchTrainingMax * 0.60 + "kg x8",
    " ",
  ];

  const press = pressProgression.map((set) => {
    return (
      <div>
        <p key={pressProgression.indexOf}>{set}</p>
      </div>
    );
  });

  const inclineBench = inclineBenchProgression.map((set) => {
    return (
      <div>
        <p key={inclineBenchProgression.indexOf}>{set}</p>
      </div>
    );
  });

  return (
    <div>
      <h3>Środa</h3>
      <div className={classes.grid}>
        <div>
          <p>Wyciskanie żołnierskie</p>
        </div>
        {press}
      </div>
      <div className={classes.grid}>
        <div>
          <p>Wyciskanie na skosie górnym</p>
        </div>
        {inclineBench}
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

export default Wednesday5d;
