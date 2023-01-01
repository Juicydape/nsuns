import React from 'react';
import classes from '../../Grid.module.css';

const Thursday = (props) => {
    const benchProgression = [
      props.benchTrainingMax * 0.75 + "kg x5",
      props.benchTrainingMax * 0.85 + "kg x3",
      props.benchTrainingMax * 0.95 + "kg x1+",
      props.benchTrainingMax * 0.9 + "kg x3",
      props.benchTrainingMax * 0.85 + "kg x3",
      props.benchTrainingMax * 0.8 + "kg x3",
      props.benchTrainingMax * 0.75 + "kg x3",
      props.benchTrainingMax * 0.7 + "kg x3",
      props.benchTrainingMax * 0.65 + "kg x3",
    ];
  
    const closeGripBenchProgression = [
      props.benchTrainingMax * 0.5 + "kg x6",
      props.benchTrainingMax * 0.6 + "kg x5",
      props.benchTrainingMax * 0.7 + "kg x3",
      props.benchTrainingMax * 0.7 + "kg x5",
      props.benchTrainingMax * 0.7 + "kg x7",
      props.benchTrainingMax * 0.7 + "kg x4",
      props.benchTrainingMax * 0.7 + "kg x6",
      props.benchTrainingMax * 0.7 + "kg x8",
      " ",
    ];
  
    const benchPress = benchProgression.map((set) => {
      return (
        <div>
          <p key={benchProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    const closeGripBenchPress = closeGripBenchProgression.map((set) => {
      return (
        <div>
          <p key={closeGripBenchProgression.indexOf}>{set}</p>
        </div>
      );
    });
  
    return (
      <div>
        <h3>{props.nameVariant}</h3>
        <div className={classes.grid}>
          <div>
            <p>Wyciskanie płasko</p>
          </div>
          {benchPress}
        </div>
        <div className={classes.grid}>
          <div>
            <p>Wyciskanie wąsko</p>
          </div>
          {closeGripBenchPress}
        </div>
        <div className={classes.assistance}>
          <div>
            <p>Asysty</p>
          </div>
          <div>
            <p>Ramiona, inne</p>
          </div>
        </div>
      </div>
    );
  };

  export default Thursday