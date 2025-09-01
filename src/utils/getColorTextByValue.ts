import { Threshold } from "../types";

const errorColor = '#F2495C';

export const getColorTextByValue = (
  value: number | undefined | null,
  thresholds: Threshold[] = []
): string => {
  if (value === undefined || value === null) return errorColor;

  const baseThreshold = thresholds.find(item => item.name === 'base')!;

  const sortedThresholds = [...thresholds]
    .filter(t => t.value !== undefined)
    .sort((a, b) => (b.value || 0) - (a.value || 0));
  
  for (const threshold of sortedThresholds) {
    if (threshold.value !== undefined && value >= threshold.value) {
      return threshold.color;
    }
  }

  return baseThreshold.color;
};