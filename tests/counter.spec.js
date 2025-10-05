import { test, expect } from "@playwright/test";

test.describe("Counter App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000"); // adjust port if needed
  });

  test("should display initial count of 0", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("0");
  });

  test("should increment multiple times", async ({ page }) => {
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await expect(page.locator("h1")).toHaveText("3");
  });

  test("should decrement count when - button is clicked", async ({ page }) => {
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "-" }).click();
    await expect(page.locator("h1")).toHaveText("1");
  });

  test("should reset count when reset button is clicked", async ({ page }) => {
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "reset" }).click();
    await expect(page.locator("h1")).toHaveText("0");
  });
});
