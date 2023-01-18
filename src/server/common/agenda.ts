import { Agenda } from "@hokify/agenda";

import { env } from "../../env/server.mjs";
export const agenda = new Agenda({ db: { address: env.DATABASE_URL } });
