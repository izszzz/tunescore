import type { Page } from "@playwright/test";
import type { Route } from "nextjs-routes";

export type Path = Route["pathname"];
export const pageGoto = (page: Page, path: Path) => page.goto(path);
