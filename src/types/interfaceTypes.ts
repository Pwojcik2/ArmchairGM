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

interface RecallData {
  playerName: string;
  recall: string;
  link: string;
}

interface InjuryData {
  name: string;
  injury: string;
  link: string;
}
