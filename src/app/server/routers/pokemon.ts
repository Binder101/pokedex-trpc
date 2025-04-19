import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

interface p {
  id : number,
  name : string,
  types : string[],
  sprite : string
}

export const pokemonRouter = router({
  getByName: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
      return ctx.prisma.pokemon.findUnique({
        where: { name: input }
      });
    }),

  getByNames: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.pokemon.findMany({
        where: { name: { in: input } }
      });
    }),

  getByType: publicProcedure
    .input(z.string().optional())
    .query(async ({ input, ctx }) => {
      if (!input) return ctx.prisma.pokemon.findMany();
      return ctx.prisma.pokemon.findMany({
        where: { types: { has: input } }
      });
    }),

    getAllTypes : publicProcedure
    .output(z.array(z.string()))
    .query(async ({ ctx }) => {
      const pokemons = await ctx.prisma.pokemon.findMany({
        select: { types: true }
      });
      return Array.from(new Set(pokemons.flatMap((p: { types: string[] }) => p.types)));
    })
});
