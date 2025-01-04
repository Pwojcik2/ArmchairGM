export interface NewRangersType {
  playerName?: string;
  playerNumber?: string;
  id?: string;
}

export interface NewRangersFinancesType {
  contracts?: string;
  currentCapSpace?: string;
  deadlineCapSpace?: string;
  generalManager?: string;
  headCoach?: string;
  injuries?: string;
  projectedCapHit?: string;
  projectedCapSpace?: string;
  projectedLTIR?: string;
  reserveList?: string;
  rosterSize?: string;
  teamName?: string;
  todayCapHit?: string;
  id?: string;
}

export interface FlyersFinancesType {
  contracts?: string;
  currentCapSpace?: string;
  deadlineCapSpace?: string;
  generalManager?: string;
  headCoach?: string;
  injuries?: string;
  projectedCapHit?: string;
  projectedCapSpace?: string;
  projectedLTIR?: string;
  reserveList?: string;
  rosterSize?: string;
  teamName?: string;
  todayCapHit?: string;
  id?: string;
}

export interface RecallData {
  playerName: string;
  recall: string;
  link: string;
}

export interface InjuryData {
  name: string;
  injury: string;
  link: string;
}

export type ForwardData = {
  name: string;
  terms: string;
  pos: string;
  status: string;
  acquired: string;
  age: number;
  cap: string;
  year2024: string;
  year2025: string;
  year2026: string;
  year2027: string;
  year2028: string;
  year2029: string;
  link: string;
};

export type DefenseData = {
  name: string;
  terms: string;
  pos: string;
  status: string;
  acquired: string;
  age: number;
  cap: string;
  year2024: string;
  year2025: string;
  year2026: string;
  year2027: string;
  year2028: string;
  year2029: string;
  link: string;
};

export type GoalieData = {
  name: string;
  terms: string;
  pos: string;
  status: string;
  acquired: string;
  age: number;
  cap: string;
  year2024: string;
  year2025: string;
  year2026: string;
  year2027: string;
  year2028: string;
  year2029: string;
  link: string;
};

export type TeamDraftPicksProps = {
  data: {
    year: string;
    rounds: string[]; // Array of image paths
  }[];
};
