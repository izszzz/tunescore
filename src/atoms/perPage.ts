import { atom } from "recoil";

import { persistAtom } from "./persist";

export const perPageState = atom<number>({
  key: "perPageState",
  default: 15,
  effects_UNSTABLE: [persistAtom],
});
