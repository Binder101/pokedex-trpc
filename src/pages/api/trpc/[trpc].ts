import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../app/server/routers/_app';
import { createContext } from '../../../app/server/context';

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
