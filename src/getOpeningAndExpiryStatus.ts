
import moment from 'moment';

export const getOpeningAndExpiryStatus = (startDate: moment.Moment | undefined, endDate: moment.Moment | undefined) => {
    let isOpen = false;
    let isExpired = true;
  
    if (!startDate && !endDate) {
      isOpen = true;
      isExpired = false;
    } else if (!startDate) {
      if (moment().isBefore(endDate)) {
        isOpen = true;
        isExpired = false;
      } else {
        isOpen = true;
      }
    } else if (!endDate) {
      if (moment().isAfter(startDate)) {
        isOpen = true;
        isExpired = false;
      } else {
        isExpired = false;
      }
    } else if (moment().isBetween(startDate, endDate)) {
      isOpen = true;
      isExpired = false;
    } else if (moment().isAfter(endDate)) {
      isOpen = true;
    } else {
      isExpired = false;
    }
  
    return {
      isOpen,
      isExpired,
    };
  };
