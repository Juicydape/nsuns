import React, { useState } from "react";
import classes from "./Evaluation.module.scss";

const Evaluation = (props) => {
  return (
    <section className={classes.eval}>
      <h2 className={classes.evalHeading}>Wprowadź wyniki</h2>
      <form className={classes.evalForm}>
        <div className={classes.evalExerciseContainer}>
          <h3 className={classes.evalTitle}>Przysiad:</h3>

          <div className={classes.evalLabelContainer}>
            <label htmlFor="squat-1RM">1RM:</label>
            <input
              className="sq1rm"
              type="number"
              name="squat-1RM"
              id="squat-1RM"
              onChange={props.handleSquat1RM}
            />
          </div>
          <div className={classes.evalLabelContainer}>
            <label htmlFor="squat-TM">TM:</label>
            <input
              type="number"
              name="squat-TM"
              id="squat-TM"
              value={props.squatTM}
            />
          </div>
        </div>

        <div className={classes.evalExerciseContainer}>
          <h3 className={classes.evalTitle}>Wyciskanie płasko:</h3>

          <div className={classes.evalLabelContainer}>
            <label htmlFor="bench-1RM">1RM:</label>
            <input
              type="number"
              name="bench-1RM"
              id="bench-1RM"
              onChange={props.handleBench1RM}
            />
          </div>
          <div className={classes.evalLabelContainer}>
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

        <div className={classes.evalExerciseContainer}>
          <h3 className={classes.evalTitle}>Martwy ciąg:</h3>

          <div className={classes.evalLabelContainer}>
            <label htmlFor="deadlift-1RM">1RM:</label>
            <input
              type="number"
              name="deadlift-1RM"
              id="deadlift-1RM"
              onChange={props.handleDeadlift1RM}
            />
          </div>
          <div className={classes.evalLabelContainer}>
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

        <div className={classes.evalExerciseContainer}>
          <h3 className={classes.evalTitle}>Wyciskanie żołnierskie:</h3>

          <div className={classes.evalLabelContainer}>
            <label htmlFor="press-1RM">1RM:</label>
            <input
              type="number"
              name="press-1RM"
              id="press-1RM"
              onChange={props.handlePress1RM}
            />
          </div>
          <div className={classes.evalLabelContainer}>
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
      </form>
    </section>
  );
};

export default Evaluation;
