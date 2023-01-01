import React, { Fragment } from "react";
import Monday from "../Days/Monday/Monday";
import Tuesday from "../Days/Tuesday/Tuesday";
import Wednesday5d from "../Days/Wednesday5d/Wednesday5d";
import Thursday from "../Days/Thursday/Thursday";
import Friday from "../Days/Friday/Friday";

const FiveDays = (props) => {
  return (
    <Fragment>
      <Monday
        benchTrainingMax={props.benchTrainingMax}
        pressTrainingMax={props.militaryPressTrainingMax}
      />
      <Tuesday
        nameVariant={"Wtorek"}
        deadliftTrainingMax={props.deadliftTrainingMax}
        squatTrainingMax={props.squatCalc}
      />
      <Wednesday5d
        benchTrainingMax={props.benchTrainingMax}
        pressTrainingMax={props.militaryPressTrainingMax}
      />
      <Friday
        nameVariant={"Czwartek"}
        deadliftTrainingMax={props.deadliftTrainingMax}
        squatTrainingMax={props.squatCalc}
      />
      <Thursday
      nameVariant={"Piątek"}
      benchTrainingMax={props.benchTrainingMax} />
    </Fragment>
  );
};

export default FiveDays;
