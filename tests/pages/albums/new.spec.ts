import { test, expect } from "@playwright/test";

import { getAuthDialog } from "../../helpers";

test.describe("Unauthenticated User", () => {
  test("should not be created album", async ({ page }) => {
    await page.goto("/albums/new");
    await page.getByLabel("Title *").type("test");
    await page.getByRole("button", { name: "submit" }).click();
    await expect(await getAuthDialog(page)).toHaveText("Sign In");
  });
});
