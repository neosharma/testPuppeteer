const puppeteer = require('puppeteer');

(async() => {
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://desihunt.com/index.php?page=sign_in');
    await page.type("input[name='login']","ravi_linda");
    await page.type("input[name='pswd']","Thunabi2013");
    await page.click("input[value='Sign in']");
    await page.waitForSelector("img[src='images/mbox.jpg']");
    await page.click("a[href='index.php?page=whos_online']");
    await page.waitForSelector("tr.dhtb");
    await page.screenshot({path: 'example.png',fullPage: true});
    //await browser.close();
})();
