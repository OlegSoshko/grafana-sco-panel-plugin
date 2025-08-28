import React from "react";
import { SelectableValue, StandardEditorProps } from "@grafana/data";
import { Select, Button, Input } from "@grafana/ui";

interface Settings {
  from: number;
  to: number;
}

type Props = StandardEditorProps<number, Settings>;

export const SimpleEditor = ({ item, value, onChange }: Props) => {
  const options: Array<SelectableValue<number>> = [];

  // Default values
  const from = item.settings?.from ?? 1;
  const to = item.settings?.to ?? 10;

  for (let i = from; i <= to; i++) {
    options.push({
      label: i.toString(),
      value: i,
    });
  }

  return (
    <>
      <Select options={options} value={value} onChange={(selectableValue) => onChange(selectableValue.value)} />
      <Input value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <Button onClick={() => onChange(value + 1)}>+</Button>
    </>
  );
};