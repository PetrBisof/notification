import React from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";

//@@viewOn:css
let popoverClassName = css`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 300px;
  height: 280px;
  left: 50%;
  margin-left: -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
//@@viewOff:css

function Popover(props) {
  return <div className={popoverClassName}>{props.children}</div>;
}
export default Popover;

//@@viewOn:propTypes
Popover.propTypes = {
  children: PropTypes.node.isRequired,
};
//@@viewOff:propTypes
