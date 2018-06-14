const puppeteer = require('puppeteer');

(async() => {
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.type('#lst-ib',"manipuri news");
    await page.click("input[name='btnK']")
    await page.waitForSelector("h3.r");
    await page.screenshot({path: 'example.png',fullPage: true});
    //await browser.close();
})();
