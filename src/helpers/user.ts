import { TRPCError } from "@trpc/server";
import type { Session } from "next-auth";

export type SessionArg = Session | null;

export const getCurrentUser = (session: SessionArg) => session?.user;
export const getCurrentUserId = (session: SessionArg) =>
  getCurrentUser(session)?.id;

export const userCountQuery = { select: { following: true, followers: true } };
export const userListArgs = { include: { _count: userCountQuery } };

export const AuthenticateUser = (session: SessionArg) => {
  if (session?.user) return session.user;
  throw new TRPCError({
    code: "UNAUTHORIZED",
    message: "Please Sign In",
  });
};
