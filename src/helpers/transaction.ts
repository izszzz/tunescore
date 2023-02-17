import { musicListArgs } from "./music";
import type { SessionArg } from "./user";
import { userArgs } from "./user";

export type TransactionArgsType = ReturnType<typeof transactionArgs>;
export const transactionArgs = (session: SessionArg) => ({
  music: musicListArgs(session),
  user: userArgs,
});
