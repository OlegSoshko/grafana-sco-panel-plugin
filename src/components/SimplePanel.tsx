import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';
import { Section } from './Section';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`

      position: relative;
    `,
    adaptiveText: css`
      font-size: clamp(0.75rem, 2.5vw, 1.5rem);
      line-height: 1.2;
    `,
    grid: css`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template:
        "a a a b b b c" 1fr
        "a a a b b b d" 1fr
        "a a a b b b e" 1fr /
        1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 4px;
    `,
    a: css`grid-area: a;`,
    b: css`grid-area: b;`,
    c: css`grid-area: c;`,
    d: css`grid-area: d;`,
    e: css`grid-area: e;`,
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const styles = useStyles2(getStyles);

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }

  const radii = data.series
    .map((series) => series.fields.find((field) => field.type === 'number'))
    .map((field) => field?.values.get(field.values.length - 1));

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div className={styles.grid}>
        <Section title={options.a} className={styles.a} value={radii[0]} />
        <Section title={options.b} className={styles.b} value={radii[1]} />
        <Section title={options.c} className={styles.c} value={radii[2]} />
        <Section title={options.d} className={styles.d} value={radii[3]} />
        <Section title={options.e} className={styles.e} value={radii[4]} />
      </div>
    </div>
  );
};
