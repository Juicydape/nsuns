import React, { useState } from "react";
import classes from "./Evaluation.module.scss";

import { roundToTwoPointFive } from "../roundingLogic";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Evaluation = (props) => {
  const [showSection, setShowSection] = useState(true);

  const handleShowSection = () => {
    setShowSection((prevState) => {
      return !prevState;
    });
  };

  return (
    <section className={classes.eval}>
      <h2 className={classes.eval__heading}>
        Wprowadź wyniki{" "}
        <button className={classes["eval__fold-icon"]} onClick={handleShowSection}>
          {showSection ? <FontAwesomeIcon icon={solid("arrow-up")} /> : <FontAwesomeIcon icon={solid("arrow-down")} /> }
        </button>
      </h2>

      {showSection && <form>
        <div className={classes["exercise-container"]}>
          <h3 className={classes.eval__title}>Przysiad:</h3>

          <div className={classes["eval__label-container"]}>
            <label htmlFor="squat-1RM">1RM:</label>
            <input
              type="number"
              name="squat-1RM"
              id="squat-1RM"
              onBlur={props.handleSquat1RM}
            />
          </div>
          <div className={classes["eval__label-container"]}>
            <label htmlFor="squat-TM">TM:</label>
            <input
              type="number"
              name="squat-TM"
              id="squat-TM"
              value={props.squatTM}
              readOnly
            />
          </div>
        </div>

        <div className={classes["exercise-container"]}>
          <h3 className={classes.eval__title}>Wyciskanie płasko:</h3>

          <div className={classes["eval__label-container"]}>
            <label htmlFor="bench-1RM">1RM:</label>
            <input
              type="number"
              name="bench-1RM"
              id="bench-1RM"
              onBlur={props.handleBench1RM}
            />
          </div>
          <div className={classes["eval__label-container"]}>
            <label htmlFor="bench-TM">TM:</label>
            <input
              type="number"
              name="bench-TM"
              id="bench-TM"
              value={props.benchTM}
              readOnly
            />
          </div>
        </div>

        <div className={classes["exercise-container"]}>
          <h3 className={classes.eval__title}>Martwy ciąg:</h3>

          <div className={classes["eval__label-container"]}>
            <label htmlFor="deadlift-1RM">1RM:</label>
            <input
              type="number"
              name="deadlift-1RM"
              id="deadlift-1RM"
              onBlur={props.handleDeadlift1RM}
            />
          </div>
          <div className={classes["eval__label-container"]}>
            <label htmlFor="deadlift-TM">TM:</label>
            <input
              type="number"
              name="deadlift-TM"
              id="deadlift-TM"
              value={props.deadliftTM}
              readOnly
            />
          </div>
        </div>

        <div className={classes["exercise-container"]}>
          <h3 className={classes.eval__title}>Wyciskanie żołnierskie:</h3>

          <div className={classes["eval__label-container"]}>
            <label htmlFor="press-1RM">1RM:</label>
            <input
              type="number"
              name="press-1RM"
              id="press-1RM"
              onBlur={props.handlePress1RM}
            />
          </div>
          <div className={classes["eval__label-container"]}>
            <label htmlFor="press-TM">TM:</label>
            <input
              type="number"
              name="press-TM"
              id="press-TM"
              value={props.pressTM}
              readOnly
            />
          </div>
        </div>
      </form>}
    </section>
  );
};

export default Evaluation;
