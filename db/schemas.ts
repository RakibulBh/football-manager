import { integer, pgTable, primaryKey, text, timestamp, varchar, uuid } from "drizzle-orm/pg-core";

export const players = pgTable('players', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  playerImg: varchar('player_img', { length: 256 }),
  goals: integer('goals').notNull().default(0),
  assists: integer('assists').notNull().default(0),
});

export const matches = pgTable('matches', {
  id: uuid('id').primaryKey().defaultRandom(),
  location: text('location').notNull(),
  matchDate: timestamp('match_date', { withTimezone: true }).notNull(),
  teamaId: uuid('teamA_id').references(() => teams.id),
  teambId: uuid('teamB_id').references(() => teams.id),
});

export const teams = pgTable('teams', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', {length: 15}).notNull(),
});

export const playerRegistrations = pgTable('player_registrations', {
  playerId: uuid('player_id').references(() => players.id),
  teamId: uuid('team_id').references(() => teams.id),
  matchId: uuid('match_id').references(() => matches.id),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.playerId, table.teamId, table.matchId] }),
  };
});