export interface Threshold {
  id: string;
  color: string;
  name?: string;
  value?: number;
}

export interface BlockSettings {
  title: string;
  thresholds: Threshold[];
}

export interface SimpleOptions {
  blockA: BlockSettings;
  blockB: BlockSettings;
  blockC: BlockSettings;
  blockD: BlockSettings;
  blockE: BlockSettings;
}
