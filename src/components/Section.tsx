import React, { useRef, useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { getColorTextByValue, prepareNumber } from 'utils';
import { FontSizeCalculator } from 'services';

interface Props {
  title: string;
  value: number | undefined;
  className?: string;
}

const getStyles = () => {
  return {
    section: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border-radius: 4px;
      border: 1px solid rgba(204, 204, 220, 0.12);
      position: relative;
      overflow: hidden;
    `,
    title: css`
      margin: 0px;
      position: absolute;
      top: 4px;
      left: 6px;
    `,
    value: css`
      font-weight: bold;
      text-align: center;
    `,
  };
};

export const Section: React.FC<Props> = ({ title, value, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const calculator = new FontSizeCalculator();
  const styles = useStyles2(getStyles);
  const [valueFontSize, setValueFontSize] = useState(34);

  const preparedValue = value === undefined ? '~' : prepareNumber(value);
  const color = getColorTextByValue(value);

  useEffect(() => {
    const updateValueFontSize = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        const newValueSize = calculator.calculateValueFontSize(width, height, preparedValue);
        setValueFontSize(newValueSize);
      }
    };

    updateValueFontSize();

    const resizeObserver = new ResizeObserver(updateValueFontSize);
    
    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [preparedValue]);

  return (
    <div ref={sectionRef} className={cx(styles.section, className)}>
      <h6 className={styles.title}>{title}</h6>
      <span className={cx(styles.value, css`color: ${color}; font-size: ${valueFontSize}px`)}>
        {preparedValue}
      </span>
    </div>
  );
};