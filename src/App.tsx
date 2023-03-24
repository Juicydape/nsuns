import React, { useState } from "react";
import classes from "./App.module.css";

import { r2p5 } from "./roundingLogic";

import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import Evaluation from "./Evaluation/Evaluation";
import Instructions from "./Instructions/Instructions";
import Separator from "./UI/Separator/Separator";
import TrainingSheet from "./TrainingSheet/TrainingSheet";

const App: React.FC = () => {
  const [squatTM, setSquatTM] = useState("");
  const [squatCalc, setSquatCalc] = useState("");
  const [benchTM, setBenchTM] = useState("");
  const [benchCalc, setBenchCalc] = useState("");
  const [deadliftTM, setDeadliftTM] = useState("");
  const [deadliftCalc, setDeadliftCalc] = useState("");
  const [pressTM, setPressTM] = useState("");
  const [pressCalc, setPressCalc] = useState("");

  const [instructionsAreOpen, setInstructionsAreOpen] = useState(false);

  const handleSquat1RM = (event) => {
    setSquatCalc(0.9 * event.target.value);
    setSquatTM(r2p5(0.9 * event.target.value));
  };

  const handleBench1RM = (event) => {
    setBenchCalc(0.9 * event.target.value);
    setBenchTM(r2p5(0.9 * event.target.value));
  };

  const handleDeadlift1RM = (event) => {
    setDeadliftCalc(0.9 * event.target.value);
    setDeadliftTM(r2p5(0.9 * event.target.value));
  };

  const handlePress1RM = (event) => {
    setPressCalc(0.9 * event.target.value);
    setPressTM(r2p5(0.9 * event.target.value));
  };

  return (
    <div className="App">
      <Header openModal={setInstructionsAreOpen} />
      {instructionsAreOpen && (
        <Modal setInstructionsAreOpen={setInstructionsAreOpen}>
          <Instructions setInstructionsAreOpen={setInstructionsAreOpen}/>
        </Modal>
      )}
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
          <TrainingSheet
            benchTrainingMax={benchCalc}
            pressTrainingMax={pressCalc}
            deadliftTrainingMax={deadliftCalc}
            squatTrainingMax={squatCalc}
          />
        </section>
        <Separator className={classes["end-separator"]} />
      </main>
    </div>
  );
}

export default App;
