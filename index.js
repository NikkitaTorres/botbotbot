const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.amazon.com/s?i=electronics&rh=n%3A15391321011&fs=true&page=2&qid=1709757775&ref=sr_pg_2"
  );

  const productsHandles = await page.$$(
    "div.s-main-slot.s-result-list.s-search-results.sg-row > .s-result-item"
  );

  for (const producthandle of productsHandles) {
    let title = "Null";
    let price = "Null";
    let img = "Null";

    try {
      title = await page.evaluate(
        (el) => el.querySelector("h2 > a > span").textContent,
        producthandle
      );
    } catch (error) {}

    try {
      price = await page.evaluate(
        (el) => el.querySelector(".a-price > .a-offscreen").textContent,
        producthandle
      );
    } catch (error) {}

    try {
      img = await page.evaluate(
        (el) => el.querySelector(".s-image").getAttribute("src"),
        producthandle
      );
    } catch (error) {}

    console.log(title, price, img);
  }
})();
