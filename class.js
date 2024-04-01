const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/s?i=electronics&rh=n%3A15391321011&fs=true&page=91', {
    waitUntil: "load"
  });

  const is_disabled = await page.$('span.s-pagination-item.s-pagination-next.s-pagination-disabled') !== null;

  console.log(is_disabled)

  //await browser.close();
})();