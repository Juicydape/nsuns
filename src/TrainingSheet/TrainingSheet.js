import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DayTemplate from "./DayTemplate/DayTemplate";

export const TrainingSheet = (props) => {
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
        arrayNo: 3,
      },
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
        arrayNo: 1,
      },
      friday: {
        nameVariant: "Piątek",
        benchTrainingMax: props.benchTrainingMax,
        arrayNo: 2,
      },
      saturday: {
        nameVariant: "Sobota",
        deadliftTrainingMax: props.deadliftTrainingMax,
        squatTrainingMax: props.squatTrainingMax,
        arrayNo: 5,
      },
    },
  };

  return (
    <Routes>
      <Route
        path="/nsuns/"
        element={
          <Fragment>
            <DayTemplate {...daysProperties.fourDays.monday} />
            <DayTemplate {...daysProperties.fourDays.tuesday} />
            <DayTemplate {...daysProperties.fourDays.thursday} />
            <DayTemplate {...daysProperties.fourDays.friday} />
          </Fragment>
        }
      />
      <Route
        path="/nsuns/5d"
        element={
          <Fragment>
            <DayTemplate {...daysProperties.fiveDays.monday} />
            <DayTemplate {...daysProperties.fiveDays.tuesday} />
            <DayTemplate {...daysProperties.fiveDays.wednesday} />
            <DayTemplate {...daysProperties.fiveDays.thursday} />
            <DayTemplate {...daysProperties.fiveDays.friday} />
          </Fragment>
        }
      />
      <Route
        path="/nsuns/6d"
        element={
          <Fragment>
            <DayTemplate {...daysProperties.sixDays.monday} />
            <DayTemplate {...daysProperties.sixDays.tuesday} />
            <DayTemplate {...daysProperties.sixDays.wednesday} />
            <DayTemplate {...daysProperties.sixDays.thursday} />
            <DayTemplate {...daysProperties.sixDays.friday} />
            <DayTemplate {...daysProperties.sixDays.saturday} />
          </Fragment>
        }
      />
    </Routes>
  );
};
