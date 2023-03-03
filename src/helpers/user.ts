import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import { getSession } from "next-auth/react";

export type SessionArg = Session | null;
export type Ctx = Parameters<GetServerSideProps>[0];
export const authenticateUser = (session: SessionArg) => {
    const user = getCurrentUser(session);
    if (user) return user;
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please Sign In" });
  },
  redirectToSignIn = async (ctx: Ctx) => {
    const session = await getSession(ctx);
    if (!getCurrentUser(session))
      return { permanent: true, destination: "/auth/signin" };
  },
  getCurrentUser = (session: SessionArg) => session?.user,
  getCurrentUserId = (session: SessionArg) => getCurrentUser(session)?.id,
  userCount = Prisma.validator<Prisma.UserCountOutputTypeArgs>()({
    select: { followers: true, following: true },
  }),
  userSelect = Prisma.validator<Prisma.UserSelect>()({
    id: true,
    name: true,
    image: true,
    stripeCustomerId: true,
    point: true,
    _count: userCount,
  }),
  userArgs = Prisma.validator<Prisma.UserArgs>()({ select: userSelect }),
  userWhere = (session: SessionArg) =>
    Prisma.validator<Prisma.UserWhereUniqueInput>()({
      id: getCurrentUserId(session),
    }),
  isSelf = (
    session: SessionArg,
    data: unknown & { user: { id: string } | null }
  ) => getCurrentUserId(session) === data.user?.id;
