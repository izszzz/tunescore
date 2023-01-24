import { TRPCError } from "@trpc/server";
import type { Session } from "next-auth";

export type SessionArg = Session | null;

export const authenticateUser = (session: SessionArg) => {
    if (session?.user) return session.user;
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Please Sign In",
    });
  },
  getCurrentUser = (session: SessionArg) => session?.user,
  getCurrentUserId = (session: SessionArg) => getCurrentUser(session)?.id,
  userCountQuery = { select: { followers: true, following: true } },
  userListArgs = { include: { _count: userCountQuery } };
