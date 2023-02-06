import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import UniversalDayPrototype from "./DayTemplate/DayTemplate";

const TrainingSheet = (props) => {
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
      wednesday: {
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
      saturday: {
        nameVariant: "Sobota",
        deadliftTrainingMax: props.deadliftTrainingMax,
        squatTrainingMax: props.squatTrainingMax,
        arrayNo: 5,
      },
    },
  };

  daysProperties.fiveDays.monday = daysProperties.fourDays.monday;
  daysProperties.fiveDays.tuesday = daysProperties.fourDays.tuesday;
  daysProperties.sixDays.monday = daysProperties.fourDays.monday;
  daysProperties.sixDays.tuesday = daysProperties.fourDays.friday;
  daysProperties.sixDays.tuesday.nameVariant = "Wtorek";
  daysProperties.sixDays.wednesday = daysProperties.fiveDays.wednesday;
  daysProperties.sixDays.thursday = daysProperties.fourDays.tuesday;
  daysProperties.sixDays.thursday.nameVariant = "Czwartek";
  daysProperties.sixDays.friday = daysProperties.fourDays.thursday;
  daysProperties.sixDays.friday.nameVariant = "Piątek";

  console.log(daysProperties)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <UniversalDayPrototype {...daysProperties.fourDays.monday} />
            <UniversalDayPrototype {...daysProperties.fourDays.tuesday} />
            <UniversalDayPrototype {...daysProperties.fourDays.thursday} />
            <UniversalDayPrototype {...daysProperties.fourDays.friday} />
          </Fragment>
        }
      />
      <Route
        path="/5d"
        element={
            <Fragment>
            <UniversalDayPrototype {...daysProperties.fiveDays.monday} />
            <UniversalDayPrototype {...daysProperties.fiveDays.tuesday} />
            <UniversalDayPrototype {...daysProperties.fiveDays.wednesday} />
            <UniversalDayPrototype {...daysProperties.fiveDays.thursday} />
            <UniversalDayPrototype {...daysProperties.fiveDays.friday} />
          </Fragment>
        }
      />
      <Route
        path="/6d"
        element={
            <Fragment>
            <UniversalDayPrototype {...daysProperties.sixDays.monday} />
            <UniversalDayPrototype {...daysProperties.sixDays.tuesday} />
            <UniversalDayPrototype {...daysProperties.sixDays.wednesday} />
            <UniversalDayPrototype {...daysProperties.sixDays.thursday} />
            <UniversalDayPrototype {...daysProperties.sixDays.friday} />
            <UniversalDayPrototype {...daysProperties.sixDays.saturday} />
          </Fragment>
        }
      />
    </Routes>
  );
};

export default TrainingSheet;
