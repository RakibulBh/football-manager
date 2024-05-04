import prisma from "@/client"

export const getPlayers = async () => {
  const players = await prisma.player.findMany({})

  return players;
}
