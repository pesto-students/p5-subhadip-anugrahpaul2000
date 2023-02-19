import { connect } from "react-redux";
import { actions } from "./redux/actions";
import React from "react";
import "./index.css";

const Room = ({ isLightOn, dispatch }) => {
  const flipLight = () => {
    dispatch({ type: actions.SWITCH });
  };

  const light = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${light}`}>
      the room is {light}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLightOn: state.isLightOn
});

const ConnectedRoom = connect(mapStateToProps)(Room);

export default ConnectedRoom;
