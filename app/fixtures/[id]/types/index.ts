export type DatabaseTeam = {
  id: string;
  name: string;
  match_id: string;
  score: number;
  Players: DatabasePlayers[];
};

export type DatabasePlayers = {
  id: string;
  name: string;
  position: string;
  profileUrl?: string | null;
};
