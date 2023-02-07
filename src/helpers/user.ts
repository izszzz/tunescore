import { TRPCError } from "@trpc/server";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import { getSession } from "next-auth/react";

export type SessionArg = Session | null;
export type Ctx = Parameters<GetServerSideProps>[0];
export const authenticateUser = (session: SessionArg) => {
    if (session?.user) return session.user;
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Please Sign In",
    });
  },
  redirectToSignIn = async (ctx: Ctx) => {
    const session = await getSession(ctx);
    if (!session?.user)
      return {
        permanent: true,
        destination: "/auth/signin",
      };
  },
  getCurrentUser = (session: SessionArg) => session?.user,
  getCurrentUserId = (session: SessionArg) => getCurrentUser(session)?.id,
  userCountQuery = { select: { followers: true, following: true } },
  userListArgs = { include: { _count: userCountQuery } };
