import {
  inferHandlerInput,
  inferProcedureInput,
  inferProcedureOutput,
  ProcedureRecord,
} from "@trpc/server";
import { AppRouter } from "../server/router";

type TRouter = AppRouter;
type TQueries = TRouter["_def"]["queries"];
type inferProcedures<
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
