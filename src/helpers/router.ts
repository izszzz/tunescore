import type { useRouter } from "next/router";
export type GetRouterArg = ReturnType<typeof useRouter>;
export const getRouterId = (router: GetRouterArg) => router.query.id as string;
export const getRouterPullId = (router: GetRouterArg) =>
  router.query.pullId as string;
export const getRouterIssueId = (router: GetRouterArg) =>
  router.query.issueId as string;
