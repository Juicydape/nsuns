import React, { Fragment } from "react";
import Monday from "../Days/Monday/Monday";
import Tuesday from "../Days/Tuesday/Tuesday";
import Thursday from "../Days/Thursday/Thursday";
import Friday from "../Days/Friday/Friday";

import UniversalDayPrototype from "../Days/UniversalDayPrototype/UniversalDayPrototype";

const FourDays = (props) => {
  const daysProperties = {
    monday: {
      nameVariant: "Poniedziałek",
      benchTrainingMax: props.benchTrainingMax,
      pressTrainingMax: props.pressTrainingMax,
      arrayNo: 0
    },
    tuesday: {
      nameVariant: "Wtorek",
      deadliftTrainingMax: props.deadliftTrainingMax,
      squatTrainingMax: props.squatTrainingMax,
      arrayNo: 1
    },
    thursday: {
      nameVariant: "Czwartek",
      benchTrainingMax: props.benchTrainingMax,
      arrayNo: 2
    },
    friday: {
      nameVariant: "Piątek",
      deadliftTrainingMax: props.deadliftTrainingMax,
      squatTrainingMax: props.squatTrainingMax,
      arrayNo: 3
    }

  };

  return (
    <Fragment>
      <UniversalDayPrototype {...daysProperties.monday} />
      <UniversalDayPrototype {...daysProperties.tuesday} />
      <UniversalDayPrototype {...daysProperties.thursday} />
      <UniversalDayPrototype {...daysProperties.friday}/>
    </Fragment>
  );
};

export default FourDays;
