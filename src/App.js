import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import { roundToTwoPointFive } from "./roundingLogic";

import Header from "./Header/Header";
import Evaluation from "./Evaluation/Evaluation";
// import Instructions from "./Instructions/Instructions";
import Separator from "./UI/Separator/Separator";

import FourDays from "./TrainingSheet/FourDays/FourDays";
import FiveDays from "./TrainingSheet/FiveDays/FiveDays";
import SixDays from "./TrainingSheet/SixDays/SixDays";

function App() {
  const [squatTM, setSquatTM] = useState("");
  const [squatCalc, setSquatCalc] = useState("220");
  const [benchTM, setBenchTM] = useState("");
  const [benchCalc, setBenchCalc] = useState("140");
  const [deadliftTM, setDeadliftTM] = useState("");
  const [deadliftCalc, setDeadliftCalc] = useState("300");
  const [pressTM, setPressTM] = useState("");
  const [pressCalc, setPressCalc] = useState("100");

  const handleSquat1RM = (event) => {
    setSquatCalc(0.9 * event.target.value);
    setSquatTM(roundToTwoPointFive(0.9 * event.target.value));
  };

  const handleBench1RM = (event) => {
    setBenchCalc(0.9 * event.target.value);
    setBenchTM(roundToTwoPointFive(0.9 * event.target.value));
  };

  const handleDeadlift1RM = (event) => {
    setDeadliftCalc(0.9 * event.target.value);
    setDeadliftTM(roundToTwoPointFive(0.9 * event.target.value));
  };

  const handlePress1RM = (event) => {
    setPressCalc(0.9 * event.target.value);
    setPressTM(roundToTwoPointFive(0.9 * event.target.value));
  };

  return (
    <div className="App">
      <Header />
      {/* <Instructions /> */}
      <main>
        <Evaluation
          handleBench1RM={handleBench1RM}
          benchTM={benchTM}
          handleDeadlift1RM={handleDeadlift1RM}
          deadliftTM={deadliftTM}
          handleSquat1RM={handleSquat1RM}
          squatTM={squatTM}
          handlePress1RM={handlePress1RM}
          pressTM={pressTM}
        />
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <FourDays
                  benchTrainingMax={benchCalc}
                  pressTrainingMax={pressCalc}
                  deadliftTrainingMax={deadliftCalc}
                  squatTrainingMax={squatCalc}
                />
              }
            />
            <Route
              path="/5d"
              element={
                <FiveDays
                  benchTrainingMax={benchCalc}
                  pressTrainingMax={pressCalc}
                  deadliftTrainingMax={deadliftCalc}
                  squatTrainingMax={squatCalc}
                />
              }
            />
            <Route
              path="/6d"
              element={
                <SixDays
                  benchTrainingMax={benchCalc}
                  pressTrainingMax={pressCalc}
                  deadliftTrainingMax={deadliftCalc}
                  squatTrainingMax={squatCalc}
                />
              }
            />
          </Routes>
        </section>
        <Separator className={classes["end-separator"]} />
        <p>Piotr Materna, {new Date().getFullYear()}</p>
      </main>
    </div>
  );
}

export default App;
