export const getColorTextByValue = (value: number | undefined | null): string => {
  if (!value) return '#ff9900';

  if (value >= 0 && value < 5) {
    return '#5794f2';
  } else if (value >= 0 && value < 50) {
    return '#73BF69';
  } else if (value >= 50 && value < 80) {
    return '#EAB839';
  } else if (value >= 80 && value <= 100) {
    return '#E24D42';
  }

  return '#ff9900';
};