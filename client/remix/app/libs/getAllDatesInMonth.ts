export const getAllDatesInMonth = (year: number, month: number): Date[] => {
  const dates: Date[] = [];
  const lastDay = new Date(year, month, 0).getDate();

  for (let day = 1; day <= lastDay; day++) {
    const date = new Date(year, month - 1, day);
    dates.push(date);
  }

  return dates;
}

