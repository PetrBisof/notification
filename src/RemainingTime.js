import { useState, useEffect } from "react";
import { getLeftTime } from "./utils/time.js";
import PropTypes from "prop-types";

function RemainingTime(props) {
  //@@viewOn:hooks
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();

  // interval is used to set new time after one second 
  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //@@viewOff:hooks

  let getTime = () => {
    let { minutes, hours } = getLeftTime(props.timeStamp);
    if (!(hours > 0) && !(minutes > 0)) {
      minutes = 1;
    }
    setHours(hours);
    setMinutes(minutes);
  };

  return ` ${hours ? hours.toString() : "0"} hours ${
    minutes ? minutes.toString() : "0"
  } minutes`;
}
export default RemainingTime;

//@@viewOn:propTypes
RemainingTime.propTypes = {
  timeStamp: PropTypes.string,
};
//@@viewOff:propTypes
