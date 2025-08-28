import { GrafanaTheme2 } from "@grafana/data";

const defaultColor = '#ff9900'

export const getColorTextByValue = (theme: GrafanaTheme2, value: number | undefined | null): string => {
  if (!theme) return defaultColor;
  if (!value) return theme.colors.error.text;

  if (value >= 0 && value < 5) {
    return theme.colors.primary.text;
  } else if (value >= 5 && value < 10) {
    return theme.colors.success.text;
  } else if (value >= 10 && value < 40) {
    return theme.colors.warning.text;
  }

  return theme.colors.error.text;
};