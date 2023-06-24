import { atom } from "recoil";

import { persistAtom } from "./persist";

export const volumeState = atom<number>({
  key: "volumeState",
  default: 100,
  effects_UNSTABLE: [persistAtom],
});
