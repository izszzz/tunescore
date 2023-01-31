import { test, expect } from "@playwright/test";

import { getAuthDialog } from "../../helpers";

test.describe("Unauthenticated User", () => {
  test("should not be created artist", async ({ page }) => {
    await page.goto("/artists/new");
    await page.getByLabel("Name *").type("test");
    await page.getByRole("button", { name: "submit" }).click();
    await expect(await getAuthDialog(page)).toHaveText("Sign In");
  });
});
