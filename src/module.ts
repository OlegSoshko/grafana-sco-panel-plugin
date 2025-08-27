import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'a',
      name: 'Title block A',
      defaultValue: 'CPU SCO',
    })
    .addTextInput({
      path: 'b',
      name: 'Title block B',
      defaultValue: 'CPU RFID',
    })
    .addTextInput({
      path: 'c',
      name: 'Title block C',
      defaultValue: '',
    })
    .addTextInput({
      path: 'd',
      name: 'Title block D',
      defaultValue: '',
    })
    .addTextInput({
      path: 'e',
      name: 'Title block E',
      defaultValue: '',
    });
});
