const RESERVATION_STORAGE_KEY = "Reservation";

export function getReservationFromStorage() {
    if (localStorage) {
      let transaction = localStorage.getItem(RESERVATION_STORAGE_KEY);
      if (transaction) return JSON.parse(transaction);
    }
  }
  
export function removeReservationFromStorage() {
    if (localStorage) {
      let reservationFromStorage = getReservationFromStorage();
      if (!reservationFromStorage) return;
      localStorage.removeItem(RESERVATION_STORAGE_KEY);
    }
  }
  
export function setReservationToStorage(reservation) {
    if (localStorage) {
      let data = {
        id: reservation.id,
        timestamp: reservation.timestamp,
      };
      localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(data));
    }
  }
  