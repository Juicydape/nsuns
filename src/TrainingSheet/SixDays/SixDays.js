import React, { Fragment } from "react";
import Monday from "../Days/Monday/Monday";
import Friday from "../Days/Friday/Friday"; //Tuesday
import Wednesday5d from "../Days/Wednesday5d/Wednesday5d";
import Tuesday from "../Days/Tuesday/Tuesday";//Thursday
import Thursday from "../Days/Thursday/Thursday"; // Friday
import Saturday6d from '../Days/Saturday6d/Saturday6d'

const SixDays = (props) => {
    return (<Fragment>
      <Monday
        benchTrainingMax={props.benchTrainingMax}
        pressTrainingMax={props.militaryPressTrainingMax}
      />
      <Friday
        nameVariant={"Wtorek"}
        deadliftTrainingMax={props.deadliftTrainingMax}
        squatTrainingMax={props.squatCalc}
      />
      <Wednesday5d
        benchTrainingMax={props.benchTrainingMax}
        pressTrainingMax={props.militaryPressTrainingMax}
      />
      <Tuesday
        nameVariant={"Czwartek"}
        deadliftTrainingMax={props.deadliftTrainingMax}
        squatTrainingMax={props.squatCalc}
      />
        <Thursday
      nameVariant={"Piątek"}
      benchTrainingMax={props.benchTrainingMax} />
        <Saturday6d />
    </Fragment>)
}

export default SixDays