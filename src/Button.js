import React from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";

//@@viewOn:css
let buttonClassName = css(`
    background-color: #66c1d5;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 24px;
    margin: 10px 0px;
    width: 90%;
    cursor: pointer;
    margin: 8px;
    &: hover{
      background-color: rgb(95, 179, 194);
    }
    &: active{
      background-color: rgb(76, 144, 156);
    }
  `);
//@@viewOff:css

function Popover(props) {
  return (
    <button className={buttonClassName} onClick={() => props.onClick()}>
      {props.label}
    </button>
  );
}
export default Popover;

//@@viewOn:propTypes
Popover.propTypes = {
  timeStamp: PropTypes.string,
};
//@@viewOff:propTypes

