import { atom } from "recoil";


import { editorSplitSizes } from "../consts";

import { persistAtom } from "./persist";

export const editorSplitSizesState = atom<number[]>({
  key: "editorSplitSizesState",
  default: editorSplitSizes,
  effects_UNSTABLE: [persistAtom],
});