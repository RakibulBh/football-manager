import z from 'zod';

export const editFixtureSchema = z.object({
  matchId: z.string().min(1),
  teamA: z.string().min(1),
  teamB: z.string().min(1),
});

export type EditFixtureType = z.infer<typeof editFixtureSchema>;
