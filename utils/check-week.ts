import {
  startOfWeek,
  endOfWeek,
  addWeeks,
  isWithinInterval,
  parseISO,
} from 'date-fns';

export const checkWeek = (date: string) => {
  const today = new Date();

  // Calculate start and end of the current week (Sunday to Saturday)
  const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
  const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 0 });

  // Calculate start and end of the next week
  const startOfNextWeek = addWeeks(startOfCurrentWeek, 1);
  const endOfNextWeek = addWeeks(endOfCurrentWeek, 1);

  // Parse the input date
  const inputDate = parseISO(date);

  if (
    isWithinInterval(inputDate, {
      start: startOfCurrentWeek,
      end: endOfCurrentWeek,
    })
  ) {
    return 'current week';
  } else if (
    isWithinInterval(inputDate, { start: startOfNextWeek, end: endOfNextWeek })
  ) {
    return 'next week';
  } else {
    return 'neither';
  }
};

// // Example usage
// console.log(checkWeek('2024-06-04')); // Should print 'current week' or 'next week' or 'neither'
// console.log(checkWeek('2024-06-10')); // Should print 'current week' or 'next week' or 'neither'
// console.log(checkWeek('2024-06-18')); // Should print 'current week' or 'next week' or 'neither'
