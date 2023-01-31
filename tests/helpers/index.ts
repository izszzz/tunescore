import type { Page } from "@playwright/test";

export const getAuthDialog = async (page: Page) =>
  await page.getByRole("heading", { name: "Sign In" });
export const getBookmarkButton = async (page: Page) =>
  await page.getByRole("button", { name: "Bookmark" });
