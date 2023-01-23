let getTime = (min,max) => {let timeFrom = Math.floor(Math.random() * (max - min + 1) + 7200000)
let dateFrom = new Date();
let millisecondsToAdd = dateFrom.getTime() + timeFrom
let dateFromString = new Date(millisecondsToAdd).toISOString()
return dateFromString
}
let now = new Date().toISOString();

let max = 14400000;

export const data = {
    data: {
      itemList: [
        {
          id: "1",
          timeFrom: now,
          timeTo: getTime(0, max),
          from: "Prague",
          to: "Paris"
        },
        {
        id: "2",
        timeFrom: now,
        timeTo: getTime(0, max),
        from: "Wroclaw",
        to: "Ankara"
        },
        {
        id: "3",
        timeFrom: now,
        timeTo: getTime(0, max),
        from: "Berlin",
        to: "London"
        },
        {
        id: "4",
        timeFrom: now,
        timeTo: getTime(0, max),
        from: "Lisabon",
        to: "Glasgow"
        },
      ],
    },
  };