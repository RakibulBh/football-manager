export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      Goals: {
        Row: {
          id: number;
          match_id: number;
          player_id: number;
          Role: string | null;
          team_id: number;
        };
        Insert: {
          id?: number;
          match_id: number;
          player_id: number;
          Role?: string | null;
          team_id: number;
        };
        Update: {
          id?: number;
          match_id?: number;
          player_id?: number;
          Role?: string | null;
          team_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Goals_match_id_fkey";
            columns: ["match_id"];
            isOneToOne: false;
            referencedRelation: "Matches";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "goals_player_id_fkey";
            columns: ["player_id"];
            isOneToOne: false;
            referencedRelation: "Players";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "goals_team_id_fkey";
            columns: ["team_id"];
            isOneToOne: false;
            referencedRelation: "Teams";
            referencedColumns: ["id"];
          }
        ];
      };
      Matches: {
        Row: {
          date: string;
          id: number;
          location: string | null;
        };
        Insert: {
          date: string;
          id?: number;
          location?: string | null;
        };
        Update: {
          date?: string;
          id?: number;
          location?: string | null;
        };
        Relationships: [];
      };
      Players: {
        Row: {
          id: number;
          name: string | null;
          position: string | null;
          profileUrl: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
          position?: string | null;
          profileUrl?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
          position?: string | null;
          profileUrl?: string | null;
        };
        Relationships: [];
      };
      Team_Player: {
        Row: {
          player_id: number;
          team_id: number;
        };
        Insert: {
          player_id: number;
          team_id: number;
        };
        Update: {
          player_id?: number;
          team_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Team_Player_player_id_fkey";
            columns: ["player_id"];
            isOneToOne: false;
            referencedRelation: "Players";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Team_Player_team_id_fkey";
            columns: ["team_id"];
            isOneToOne: false;
            referencedRelation: "Teams";
            referencedColumns: ["id"];
          }
        ];
      };
      Teams: {
        Row: {
          id: number;
          match_id: number | null;
          name: string | null;
        };
        Insert: {
          id?: number;
          match_id?: number | null;
          name?: string | null;
        };
        Update: {
          id?: number;
          match_id?: number | null;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Teams_match_id_fkey";
            columns: ["match_id"];
            isOneToOne: false;
            referencedRelation: "Matches";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Teams_match_id_fkey1";
            columns: ["match_id"];
            isOneToOne: false;
            referencedRelation: "Matches";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export let player: Tables<"Players">;
export let goal: Tables<"Goals">;
export let match: Tables<"Matches">;
export let team: Tables<"Teams">;
