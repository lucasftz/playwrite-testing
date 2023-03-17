import { test, expect } from "@playwright/test";
import { config } from "../config";

test("login", async ({ page }) => {
  await page.goto(config.WEBSITE_URL);
  await expect(page.getByRole("heading", { name: "Login page" })).toBeVisible();
  await page.getByPlaceholder("username").fill("test user");
  expect(
    page.getByRole("paragraph", { name: "Hello, test user", exact: true })
  );
});
