import React, { useState } from "react";
import classes from "./App.module.css";

import Evaluation from "./Evaluation/Evaluation";
import Instructions from "./Instructions/Instructions";
import Separator from "./UI/Separator/Separator";

import FourDays from "./TrainingSheet/FourDays/FourDays";
import FiveDays from "./TrainingSheet/FiveDays/FiveDays";
import SixDays from "./TrainingSheet/SixDays/SixDays";

function App() {
  const [squatTM, setSquatTM] = useState("");
  const [squatCalc, setSquatCalc] = useState("");
  const [benchTM, setBenchTM] = useState("");
  const [deadliftTM, setDeadliftTM] = useState("");
  const [pressTM, setPressTM] = useState("");

  const handleSquat1RM = (event) => {
    setSquatCalc(0.9 * event.target.value);
    setSquatTM(2.5 * Math.ceil((0.9 * event.target.value) / 2.5));
  };

  const handleBench1RM = (event) => {
    setBenchTM(2.5 * Math.ceil((0.9 * event.target.value) / 2.5));
  };

  const handleDeadlift1RM = (event) => {
    setDeadliftTM(2.5 * Math.ceil((0.9 * event.target.value) / 2.5));
  };

  const handlePress1RM = (event) => {
    setPressTM(2.5 * Math.ceil((0.9 * event.target.value) / 2.5));
  };

  const benchTrainingMax = benchTM;
  const deadliftTrainingMax = deadliftTM;
  const militaryPressTrainingMax = pressTM;

  return (
    <div className="App">
      <header>
        {" "}
        <h1>nSuns Progresja liniowa</h1>
        <nav>
          <ul>
            <a href="index.html">4d</a>
          </ul>
          <ul>
            <a href="index.html">5d</a>
          </ul>
          <ul>
            <a href="index.html">6d</a>
          </ul>
        </nav>
      </header>

      <Instructions />
      <Separator />
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
        <Separator />
        <section>
          <SixDays
            benchTrainingMax={benchTrainingMax}
            pressTrainingMax={militaryPressTrainingMax}
            deadliftTrainingMax={deadliftTrainingMax}
            squatTrainingMax={squatCalc}
          />
        </section>
        <Separator className={classes["end-separator"]} />
      </main>
    </div>
  );
}

export default App;
