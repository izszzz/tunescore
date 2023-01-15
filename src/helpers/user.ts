import type { Session } from "next-auth";

export type SessionArg = Session | null;

export const getCurrentUser = (session: SessionArg) => session?.user;
export const getCurrentUserId = (session: SessionArg) =>
  getCurrentUser(session)?.id;

export const userCountQuery = { select: { following: true, followers: true } };
export const userListArgs = { include: { _count: userCountQuery } };
