import React from "react";
import { Actions } from "./redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

function CounterApp() {
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <div className="main">
      <div className="main-container">
        <h2>
          You have walked {useSelector((state) => state).StepCounter.step}{" "}
          step(s) today!{" "}
        </h2>
        <div>
          <button value={Actions.INC_STEP} onClick={onClick}>
            Add a Step
          </button>
        </div>
        <button value={Actions.RESET_STEP} onClick={onClick}>
          Reset Steps
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
