//returns minutes and hours which remain from now to the specific time
export const getLeftTime = (time) => {
    let reservationTime = new Date(time).getTime();
    let now = new Date().getTime();
    let timeLeft = reservationTime - now;
    let milisecondsInSecond = 1000;
    let secondsInMinute = 60;
    let minutesInHours = 60;
    let hoursInDay = 24;
    let hours = Math.floor(
      (timeLeft %
        (milisecondsInSecond * secondsInMinute * minutesInHours * hoursInDay)) /
        (milisecondsInSecond * secondsInMinute * minutesInHours)
    );
    let minutes = Math.floor(
      (timeLeft % (milisecondsInSecond * secondsInMinute * minutesInHours)) /
        (milisecondsInSecond * secondsInMinute)
    );
  
    return { hours: hours, minutes: minutes };
  };