import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/tunescore/);
});

test("header title click", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "tunescore" }).click();
  await expect(page).toHaveURL(/.*\//);
});

test("display signin modal, when click signin button", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "SignIn" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toHaveText(
    "Sign In"
  );
});

test("can use header search", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("combobox").first().click();
  await page.getByRole("combobox").first().fill("test");
  await page.getByRole("combobox").first().press("Enter");
  await expect(page).toHaveURL(/.*\/search/);
});

test.describe("change locale", () => {
  test("en to ja", async ({ page }) => {
    await page.goto("/en");
    await page.getByLabel("Locale").click();
    await page.getByRole("option", { name: "ja" }).click();
    await expect(page).toHaveURL(/.*\//);
  });

  test("ja to en", async ({ page }) => {
    await page.goto("/ja");
    await page.getByLabel("Locale").click();
    await page.getByRole("option", { name: "en" }).click();
    await expect(page).toHaveURL(/.*\/en/);
  });
});
