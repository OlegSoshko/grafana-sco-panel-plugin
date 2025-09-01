import React from "react";
import { css } from '@emotion/css';
import { StandardEditorProps } from "@grafana/data";
import { Button, useStyles2, Input, ColorPicker, IconButton, Divider, Label } from "@grafana/ui";
import { BlockSettings } from "../types";
import { generateUUID } from "../utils";

type Props = StandardEditorProps<BlockSettings["thresholds"]>;

const getStyles = () => {
  return {
    container: css`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `,
    add_threshold: css`
      width: 100%;
      justify-content: center;
    `,
  };
};

export const SimpleEditor = ({ value, onChange }: Props) => {
  const styles = useStyles2(getStyles);

  const onAddThreshold = () => {
    const lastAddedThreshold = value[0];

    onChange([
      {
        id: generateUUID(),
        value: (lastAddedThreshold.value || 0) + 10,
        color: '#73BF69'
      },
      ...value
    ]);
  };

  const onChangeColor = (id: string) => (newColor: string) => {
    onChange(value.map((c) => c.id === id ? { ...c, color: newColor } : c));
  };

  const onChangeValue = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value.map((c) => c.id === id ? { ...c, value: event.target.value ? Number(event.target.value) : undefined } : c));
  }

  const onDeleteThreshold = (id: string) => () => {
    onChange(value.filter((c) => c.id !== id));
  };

  return (
    <div className={styles.container}>
      <Divider />
      <Label>Thresholds</Label>
      <Button className={styles.add_threshold} variant="secondary" size="sm" icon="plus" onClick={onAddThreshold}>Add threshold</Button>
      {
        value.sort((a, b) => (b.value || 0) - (a.value || 0)).map((threshold) => {
          const isBase = threshold.name === 'base';

          if (isBase) {
            return (
              <Input
                disabled
                value={threshold.name}
                key={threshold.id}
                prefix={
                  <ColorPicker
                    color={threshold.color}
                    onChange={onChangeColor(threshold.id)}
                  />
                }
              />
            );
          }

          return (
            <Input
              key={threshold.id}
              value={threshold.value}
              type="number"
              onChange={onChangeValue(threshold.id)}
              prefix={
                <ColorPicker
                  color={threshold.color}
                  onChange={onChangeColor(threshold.id)}
                />
              }
              suffix={
                <IconButton
                  name="trash-alt"
                  aria-label="Delete threshold"
                  onClick={onDeleteThreshold(threshold.id)}
                />
              }
            />
          );
        })
      }
    </div>
  );
};