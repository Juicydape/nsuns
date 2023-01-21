import React, { Fragment } from "react";
import Monday from '../Days/Monday/Monday';
import Tuesday from '../Days/Tuesday/Tuesday';
import Thursday from '../Days/Thursday/Thursday';
import Friday from '../Days/Friday/Friday';

const FourDays = (props) => {
  return (
    <Fragment>
      <Monday
        benchTrainingMax={props.benchTrainingMax}
        pressTrainingMax={props.pressTrainingMax}
      />
      <Tuesday
        nameVariant={"Wtorek"}
        deadliftTrainingMax={props.deadliftTrainingMax}
        squatTrainingMax={props.squatTrainingMax}
      />
      <Thursday
      nameVariant={"Czwartek"}
      benchTrainingMax={props.benchTrainingMax} />
      <Friday
        nameVariant={"Piątek"}
        deadliftTrainingMax={props.deadliftTrainingMax}
        squatTrainingMax={props.squatTrainingMax}
      />
    </Fragment>
  );
};

export default FourDays;