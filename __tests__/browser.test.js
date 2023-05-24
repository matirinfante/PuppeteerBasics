const puppeteer = require('puppeteer')

describe('First puppeteer test', () => {
    it('should open and close the browser', async () => {
        const browser = await puppeteer.launch({
            headless: false
        })
        const page = await browser.newPage()
        await page.goto('https://www.google.com.ar')
        await browser.close()
    }, 10000)
});
