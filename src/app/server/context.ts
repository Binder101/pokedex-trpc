import { PrismaClient } from '@prisma/client';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { inferAsyncReturnType } from '@trpc/server'; 

export async function createContext(opts: CreateNextContextOptions) {
  const prisma = new PrismaClient();
  return { prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
