import { atom } from "recoil";

import { persistAtom } from "./persist";

export const ambientState = atom<boolean>({
  key: "ambientState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
