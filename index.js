const { default: puppeteer } = require('puppeteer');
const puppeterr = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
  });
  const page = await browser.newPage();
  await page.goto('https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok');

  const productsHandles = await page.$$('.product-grid__items .css-hvew4t');

  for(const producthandle of productsHandles){
    try {

    const title = await page.evaluate(el => el.querySelector("div.product-card__animation_wrapper > div > div > div > div").textContent, producthandle)

    console.log(title)
  } catch (error) {}
}
  
  //await browser.close();
})();
