import React, { Fragment } from "react";
import UniversalDayPrototype from "../Days/UniversalDayPrototype/UniversalDayPrototype";

const FourDays = (props) => {
  const daysProperties = {
    fourDays: {
      monday: {
        nameVariant: "Poniedziałek",
        benchTrainingMax: props.benchTrainingMax,
        pressTrainingMax: props.pressTrainingMax,
        arrayNo: 0,
      },
      tuesday: {
        nameVariant: "Wtorek",
        deadliftTrainingMax: props.deadliftTrainingMax,
        squatTrainingMax: props.squatTrainingMax,
        arrayNo: 1,
      },
      thursday: {
        nameVariant: "Czwartek",
        benchTrainingMax: props.benchTrainingMax,
        arrayNo: 2,
      },
      friday: {
        nameVariant: "Piątek",
        deadliftTrainingMax: props.deadliftTrainingMax,
        squatTrainingMax: props.squatTrainingMax,
        arrayNo: 3,
      },
    },
    fiveDays: {
      // monday: daysProperties.fourDays.monday,
      // tuesday: daysProperties.fourDays.tuesday,
      wednesday5d: {
        nameVariant: "Środa",
        benchTrainingMax: props.benchTrainingMax,
        pressTrainingMax: props.pressTrainingMax,
        arrayNo: 4,
      },
      thursday: {
        nameVariant: "Czwartek",
        deadliftTrainingMax: props.deadliftTrainingMax,
        squatTrainingMax: props.squatTrainingMax,
        arrayNo: 3,
      },
      friday: {
        nameVariant: "Piątek",
        benchTrainingMax: props.benchTrainingMax,
        arrayNo: 2,
      },
    },
    sixDays: {

    },
  };

  return (
    <Fragment>
      <UniversalDayPrototype {...daysProperties.fourDays.monday} />
      {/* <UniversalDayPrototype {...daysProperties.fourDays.tuesday} />
      <UniversalDayPrototype {...daysProperties.fourDays.thursday} />
      <UniversalDayPrototype {...daysProperties.fourDays.friday} /> */}
    </Fragment>
  );
};

export default FourDays;
