import { date, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const matches = pgTable("matches", {
    matchId: uuid("match_id").primaryKey(),
    matchDate: date("match_date").defaultNow(),
    matchLocation: text("match_location").notNull(),
    teamA: uuid("team_a"),
    teamB: uuid("team_b"),
});

export const teams = pgTable("teams", {
    teamId: uuid("team_id").primaryKey(),
    teamName: text("team_name").notNull(),
    teamLogo: text("team_logo"),
});

export const players = pgTable("players", {
    playerId: uuid("player_id").primaryKey(),
    playerImg: text("player_img"),
    playerName: text("player_name").notNull(),
    playerGoals: integer("player_goals").default(0),
    playerAssists: integer("player_assists").default(0),
    teamId: integer('team_id').references(() => teams.teamId),
});

export const teamsRelations = relations(teams, ({ many }) => ({
  players: many(players, {
    fields: [players.teamId],
    references: [teams.teamId],
  }),
}));

export const playersRelations = relations(players, ({ one }) => ({
  team: one(teams, {
    fields: [players.teamId],
    references: [teams.teamId],
  }),
}));