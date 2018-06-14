const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    //const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://ethermine.org/miners/5040ce619304769dB050aE1339e049740283d77D');
    await page.waitForSelector("button[rel='workerChart']");
    await page.screenshot({path: 'example.png',fullPage: true});
    await browser.close();
})();
