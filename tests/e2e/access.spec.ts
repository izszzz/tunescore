import { expect, test } from "@playwright/test";
test("can access cart", async ({ page }) => {
  await page.goto("/cart");
  await expect(page.getByText("tunescore")).toBeVisible();
  await page.screenshot({ path: "screenshot.png", fullPage: true });
});
