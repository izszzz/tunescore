import type {
  inferHandlerInput,
  inferProcedureInput,
  inferProcedureOutput,
  ProcedureRecord,
} from "@trpc/server";
import type { AppRouter } from "../server/routers/trpc";

type TRouter = AppRouter;
type TQueries = TRouter["_def"]["queries"];
type inferProcedures<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TObj extends ProcedureRecord<any, any, any, any, any, any>
> = {
  [TPath in keyof TObj]: {
    input: inferProcedureInput<TObj[TPath]>;
    output: inferProcedureOutput<TObj[TPath]>;
  };
};

type TQueryValues = inferProcedures<TRouter["_def"]["queries"]>;

export function createPath<TPath extends keyof TQueryValues & string>(
  pathAndInput: [path: TPath, ...args: inferHandlerInput<TQueries[TPath]>]
) {
  return pathAndInput;
}
