const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
    // Find the chrome executable (common windows paths)
    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: true
    });
    
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.error('PAGE ERROR:', err.toString()));
    page.on('error', err => console.error('ERROR:', err.toString()));
    
    try {
        await page.goto('file:///' + path.resolve('main.html').replace(/\\/g, '/'));
        await page.waitForTimeout(2000);
    } catch(e) {
        console.error('NAV ERROR:', e);
    }
    
    await browser.close();
})();
