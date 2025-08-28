const TEXT_WIDTH_TO_FONT_SIZE_RATIO = 3;
const TEXT_HEIGHT_TO_FONT_SIZE_RATIO = 2;

export const calculateFontSize = (params: {
  containerWidth: number,
  containerHeight: number,
  minFontSize?: number
}): number => {
  const baseFontSize = params.minFontSize || 16;
  const textBlockWidth = TEXT_WIDTH_TO_FONT_SIZE_RATIO * baseFontSize;
  const textBlockHeight = TEXT_HEIGHT_TO_FONT_SIZE_RATIO * baseFontSize;

  const scaleWidth = params.containerWidth / textBlockWidth;
  const scaleHeight = params.containerHeight / textBlockHeight;
  const scale = Math.min(scaleWidth, scaleHeight);
  
  return baseFontSize * scale;
}
