const puppeteer = require('puppeteer');

(async() => {
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});
    const page1 = await browser.newPage();
    await page1.goto('http://tags.bluekai.com/site/64833?phint=type%3Dkatana');

    const page = await browser.newPage();
    await page.goto('http://tags.bluekai.com/decode_cookies');
    await page.type("input[name='id']","mssharma");
    await page.type("input[name='passwd']","Nanao@18");
    await page.click("input[value='login']");
    //await page.waitForSelector("img[src='images/mbox.jpg']");
    //await page.click("a[href='index.php?page=whos_online']");
    //await page.waitForSelector("tr.dhtb");
    await page.screenshot({path: 'example.png',fullPage: true});
    await browser.close();   // x4699Ww8/P+EGeRM
})();
