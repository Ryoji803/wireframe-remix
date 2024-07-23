export interface Prefecture {
  code: number;
  name: string;
}

export interface Population {
  [prefecture: string]: PrefectureData;
}

export interface PrefectureData {
  [label: string]: LabelData[];
}

export interface LabelData {
  year: number;
  population: number;
}

export type RechartsData = PopulationPoint[];

export interface PopulationPoint {
  year: string;
  [prefecture: string]: number | string;
}

export interface ColorMap {
  [key: string]: string;
}
