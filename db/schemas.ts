import { PrimaryKey, date, integer, pgTable, primaryKey, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const players = pgTable('players', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  name: text('name').notNull(),
  playerImg: varchar('player_img', { length: 256 }),
  goals: integer('goals').notNull().default(0),
  assists: integer('assists').notNull().default(0),
});

export const matches = pgTable('matches', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  location: text('location').notNull(),
  matchDate: timestamp('match_date', { withTimezone: true }).notNull(),
  team1Id: integer('team1_id').notNull().references(() => teams.id),
  team2Id: integer('team2_id').notNull().references(() => teams.id),
});

export const teams = pgTable('teams', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
});

export const playerRegistrations = pgTable('player_registrations', 
  {
    playerId: integer('player_id').notNull().references(() => players.id),
    teamId: integer('team_id').notNull().references(() => teams.id),
    matchId: integer('match_id').notNull().references(() => matches.id),
  },
  table => {
    return {
      pk: primaryKey({columns: [table.playerId, table.teamId, table.matchId]})
    }
  }
);