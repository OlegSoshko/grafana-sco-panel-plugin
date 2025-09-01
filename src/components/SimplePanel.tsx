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
    .map((series) => ({ name: series.refId, value:series.fields.find((field) => field.type === 'number')}))
    .reduce<Record<string, number | undefined | null>>((acc, curr) => {
      if (curr.name) {
        acc[curr.name] = curr.value?.values[curr.value?.values.length - 1];
      }

      return acc;
    }, { });

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
        <Section title={options.blockA.title} className={styles.a} value={radii['A']} thresholds={options.blockA.thresholds} />
        <Section title={options.blockB.title} className={styles.b} value={radii['B']} thresholds={options.blockB.thresholds} />
        <Section title={options.blockC.title} className={styles.c} value={radii['C']} thresholds={options.blockC.thresholds} />
        <Section title={options.blockD.title} className={styles.d} value={radii['D']} thresholds={options.blockD.thresholds} />
        <Section title={options.blockE.title} className={styles.e} value={radii['E']} thresholds={options.blockE.thresholds} />
      </div>
    </div>
  );
};
