import { getCurrentUserId } from "./user";
import type { GetCurrentUserArg } from "./user";

export const checkCurrentUserFollowingQuery = (session: GetCurrentUserArg) => ({
  where: {
    following: { id: getCurrentUserId(session) },
  },
});
