import { resourceListArgs } from "../../../helpers/resource";
import type { SessionArg } from "../../../helpers/user";
import { userWhere } from "../../../helpers/user";
export const bookmarkQuery = (session: SessionArg) => ({
  args: {
    where: { user: userWhere(session) },
    include: {
      resource: resourceListArgs(session),
    },
  },
  options: { page: 0 },
});
