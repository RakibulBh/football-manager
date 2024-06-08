export type DatabaseTeam = {
  id: number;
  name: string;
  match_id: string;
  score: number;
};

export type DatabasePlayers = {
  id: number;
  name: string;
  position: string;
  profileUrl: string;
};

export type Players = {
  name: string;
  position: string;
  teamId: number;
};
