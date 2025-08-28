import { GrafanaTheme2 } from "@grafana/data";

const defaultColor = '#ff9900'

export const getColorTextByValue = (theme: GrafanaTheme2, value: number | undefined | null): string => {
  if (!theme) return defaultColor;
  if (!value) return theme.colors.error.text;

  if (value >= 0 && value < 5) {
    return theme.colors.primary.text;
  } else if (value >= 0 && value < 50) {
    return theme.colors.success.text;
  } else if (value >= 50 && value < 80) {
    return theme.colors.warning.text;
  } else if (value >= 80 && value <= 100) {
    return theme.colors.error.text;
  }

  return defaultColor;
};