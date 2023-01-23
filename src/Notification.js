import React, { useState, useEffect, useContext } from "react";
import { TransactionContext } from "./App.js";
import { css } from "@emotion/css";
import {
  getReservationFromStorage,
  setReservationToStorage,
  removeReservationFromStorage,
} from "./utils/storage.js";
import Popover from "./Popover.js";
import Button from "./Button.js";
import RemainingTime from "./RemainingTime.js";
import pic from "./assets/airlinesLogo.jpg";

//@@viewOn:css
let popoverClassName = css`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
`;

let messageClassName = css`
  color: red;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: black;
  opacity: 0.9;
  padding: 0px 8px;
`;

let headerClassName = css`
  margin-top: 20px;
  color: black;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

let imageClassName = css`
  width: 120px;
  height: 120px;
`;
//@@viewOff:css

function Notification() {
  //@@viewOn:hooks
  let { data } = useContext(TransactionContext);
  let [activeReservation, setActiveReservation] = useState();
  let [isPopoverOpened, setIsPopoverOpened] = useState(false);

  useEffect(() => {
    // There is always key itemList, condition is her because data should be obtained from cmd call. Info for user, when call is in error state should be in another component.
    if (data?.itemList) {
      let activeReservation = data.itemList.find((flight) => isActive(flight));
      // localStorage is used because flight is saved into it and when component is remounted notification is not displayed again for specific time when the same reservation should be displayed
      let storageReservation = getReservationFromStorage();
      if (
        storageReservation &&
        (storageReservation.id !== activeReservation?.id ||
          isOverTimeLimit(storageReservation))
      ) {
        removeReservationFromStorage(storageReservation);
      }
      if (activeReservation && !storageReservation) {
        setIsPopoverOpened(true);
        setActiveReservation(activeReservation);
      }
    }
  }, [data]);
  //@@viewOff:hooks

  const onCloseButtonClick = () => {
    setIsPopoverOpened(false);
    setReservationToStorage({
      ...activeReservation,
      timestamp: new Date().toISOString(),
    });
  };

  return isPopoverOpened ? (
    <Popover className={popoverClassName}>
      <div>
        <div className={headerClassName}>Upcoming flight</div>
        <img className={imageClassName} src={pic} alt="airlines" />
        <div className={messageClassName}>
          {`Your flight with airline Wing from ${activeReservation?.from} to ${activeReservation?.to}  is in`}
          {activeReservation?.timeTo && (
            <RemainingTime timeStamp={activeReservation?.timeTo} />
          )}
        </div>
      </div>
      <Button onClick={onCloseButtonClick} label="Close" />
    </Popover>
  ) : null;
}
export default Notification;

//@@viewOn:helpers
const isActive = (flight) => {
  let dateFrom = new Date(flight.timeFrom).getTime();
  let dateTo = new Date(flight.timeTo).getTime();
  let now = new Date().getTime();
  return now > dateFrom && now < dateTo;
};

const isOverTimeLimit = (storageReservation) => {
  let isOverTimeLimit = false;
  if (
    storageReservation &&
    new Date().getTime() >
      new Date(storageReservation.timestamp).getTime() + 1800000
  ) {
    isOverTimeLimit = true;
  }
  return isOverTimeLimit;
};
//@@viewOff:helpers
