const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.amazon.com/s?k=server&i=alexa-skills&crid=3BU0YLNLVCJHN&sprefix=serv%2Calexa-skills%2C259&ref=nb_sb_noss_2"
  );


  let i = 0;

  let items = [];

  let isBtnDisabled = false;
  while (!isBtnDisable) {
    await page.waitForSelector('[data-index="5"]');
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
      } catch (error) { }

      try {
        price = await page.evaluate(
          (el) => el.querySelector(".a-price > .a-offscreen").textContent,
          producthandle
        );
      } catch (error) { }

      try {
        img = await page.evaluate(
          (el) => el.querySelector(".s-image").getAttribute("src"),
          producthandle
        );
      } catch (error) { }

      console.log(title, price, img);

      if (title !== "Null") {
        items.push({ title, price, img })
      }
      await page.waitForSelector("span.s-pagination-item.s-pagination-next", { visible: true });
      const is_disabled = await page.$('span.s-pagination-item.s-pagination-next.s-pagination-disabled') !== null;

      isBtnDisabled = is_disabled
      if (!is_disabled) {
        await Promise.all([
         page.click("span.s-pagination-item.s-pagination-next"),
         page.waitForNavigation({ waitUntil: "networkidle2" }),
      ]);
      }

    }
  }
  console.log(items);
  console.log(items.length);
})();
