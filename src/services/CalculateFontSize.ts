export class FontSizeCalculator {
  private baseSize: number;
  private minSize: number;
  private maxSize: number;

  constructor(baseSize: number = 34, minSize: number = 16, maxSize: number = 60) {
    this.baseSize = baseSize;
    this.minSize = minSize;
    this.maxSize = maxSize;
  }

  // Геттеры для доступа к размерам
  getBaseSize(): number {
    return this.baseSize;
  }

  getMinSize(): number {
    return this.minSize;
  }

  getMaxSize(): number {
    return this.maxSize;
  }

  // Сеттеры для изменения размеров
  setBaseSize(size: number): void {
    this.baseSize = size;
  }

  setMinSize(size: number): void {
    this.minSize = size;
  }

  setMaxSize(size: number): void {
    this.maxSize = size;
  }

  // Основной метод расчета размера шрифта
  calculateValueFontSize(containerWidth: number, containerHeight: number, text: string): number {
    // Коэффициенты для адаптации размера
    const widthFactor = containerWidth / 200; // 200px как базовая ширина
    const heightFactor = containerHeight / 150; // 150px как базовая высота
    
    // Учитываем длину текста
    const textLengthFactor = Math.max(0.8, 1 - (text.length - 5) * 0.05);
    
    // Вычисляем размер с учетом всех факторов
    let calculatedSize = this.baseSize * widthFactor * heightFactor * textLengthFactor;
    
    // Ограничиваем размеры
    return Math.max(this.minSize, Math.min(this.maxSize, calculatedSize));
  }

  // Статический метод для создания стандартного калькулятора
  static createDefault(): FontSizeCalculator {
    return new FontSizeCalculator(34, 26, 60);
  }

  // Метод для создания калькулятора с кастомными размерами
  static createCustom(baseSize: number, minSize: number, maxSize: number): FontSizeCalculator {
    return new FontSizeCalculator(baseSize, minSize, maxSize);
  }
}

// // Экспортируем функцию для обратной совместимости
// export const calculateValueFontSize = (containerWidth: number, containerHeight: number, text: string) => {
//   return FontSizeCalculator.createDefault().calculateValueFontSize(containerWidth, containerHeight, text);
// };