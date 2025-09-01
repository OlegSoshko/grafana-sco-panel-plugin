import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';
import { SimpleEditor } from 'components/SimpleEditor';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addNestedOptions({
      category: ['Block A'],
      path: 'blockA',
      build: (b) => {
        return b
          .addTextInput({
            path: 'title',
            name: 'Title',
            defaultValue: 'CPU SCO',
          })
          .addCustomEditor({
            id: 'thresholds',
            path: 'thresholds',
            name: '',
            defaultValue: [{
              id: 'base',
              name: 'base',
              color: '#1F60C4',
            }],
            editor: SimpleEditor,
          });
      },
    })
    .addNestedOptions({
      category: ['Block B'],
      path: 'blockB',
      build: (b) => {
        return b
          .addTextInput({
            path: 'title',
            name: 'Title',
            defaultValue: 'CPU RFID',
          })
          .addCustomEditor({
            id: 'thresholds',
            path: 'thresholds',
            name: '',
            defaultValue: [{
              id: 'base',
              name: 'base',
              color: '#1F60C4',
            }],
            editor: SimpleEditor,
          });
        }
    })
    .addNestedOptions({
      category: ['Block C'],
      path: 'blockC',
      build: (b) => {
        return b
          .addTextInput({
            path: 'title',
            name: 'Title',
            defaultValue: '',
          })
          .addCustomEditor({
            id: 'thresholds',
            path: 'thresholds',
            name: '',
            defaultValue: [{
              id: 'base',
              name: 'base',
              color: '#1F60C4',
            }],
            editor: SimpleEditor,
          });
        }
    })
    .addNestedOptions({
      category: ['Block D'],
      path: 'blockD',
      build: (b) => {
        return b
          .addTextInput({
            path: 'title',
            name: 'Title',
            defaultValue: '',
          })
          .addCustomEditor({
            id: 'thresholds',
            path: 'thresholds',
            name: '',
            defaultValue: [{
              id: 'base',
              name: 'base',
              color: '#1F60C4',
            }],
            editor: SimpleEditor,
          });
        }
    })
    .addNestedOptions({
      category: ['Block E'],
      path: 'blockE',
      build: (b) => {
        return b
          .addTextInput({
            path: 'title',
            name: 'Title',
            defaultValue: '',
          })
          .addCustomEditor({
            id: 'thresholds',
            path: 'thresholds',
            name: '',
            defaultValue: [{
              id: 'base',
              name: 'base',
              color: '#1F60C4',
            }],
            editor: SimpleEditor,
          });
        }
    });
});
