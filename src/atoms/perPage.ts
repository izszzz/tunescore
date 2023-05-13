import { atom } from "recoil";

import { perPage } from "../consts/prisma";

import { persistAtom } from "./persist";

export const perPageState = atom<number>({
  key: "perPageState",
  default: perPage,
  effects_UNSTABLE: [persistAtom],
});
