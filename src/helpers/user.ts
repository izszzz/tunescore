import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import type { Session } from "next-auth";
import type { useSession } from "next-auth/react";

export type SessionArg = Session | null;
const getCurrentUser = (session: SessionArg) => session?.user,
  userCount = Prisma.validator<Prisma.UserCountOutputTypeArgs>()({
    select: { followers: true, following: true },
  });
export const authenticateUser = (session: SessionArg) => {
    const user = getCurrentUser(session);
    if (user) return user;
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please Sign In" });
  },
  getCurrentUserId = (session: SessionArg) => getCurrentUser(session)?.id,
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
  ) => getCurrentUserId(session) === data.user?.id,
  isAuth = (status: ReturnType<typeof useSession>["status"]) =>
    status === "authenticated";
