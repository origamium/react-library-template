/* eslint-disable */
import "expect-puppeteer";

describe("App", () => {
    it("visually looks correct", async () => {
        // APIs from jest-puppeteer
        await page.goto("http://localhost:6006/iframe.html?id=app--basic");
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
