import React, { useRef, useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { getColorTextByValue, prepareNumber, calculateFontSize } from 'utils';

interface Props {
  title: string;
  value: number | undefined | null;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    `,
    value: css`
      font-weight: bold;
      text-align: center;
    `,
  };
};

export const Section: React.FC<Props> = ({ title, value, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const styles = useStyles2(getStyles);
  const [fontSize, setFontSize] = useState(16);

  const preparedValue = typeof value === 'number' ? prepareNumber(value) : '~';
  const color = getColorTextByValue(value);

  useEffect(() => {
    const updateFontSize = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const containerWidth = rect.width;
        const containerHeight = rect.height;
        
        const fontSize = calculateFontSize({ containerWidth, containerHeight });
        setFontSize(fontSize);
      }
    };

    updateFontSize();

    const resizeObserver = new ResizeObserver(updateFontSize);
    
    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className={cx(styles.section, className)}>
      <h6 className={styles.title}>{title}</h6>
      <span className={cx(styles.value, css`color: ${color}; font-size: ${fontSize}px`)}>
        {preparedValue}
      </span>
    </div>
  );
};