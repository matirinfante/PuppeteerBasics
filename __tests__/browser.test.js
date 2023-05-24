const puppeteer = require('puppeteer')

describe('First puppeteer test', () => {
    it('should open and close the browser', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
            defaultViewport: null,
            // defaultViewport: {
            //     width: 1980,
            //     height: 1080
            // },
            // args: ['--window-size=1920,1080']
        })
        const page = await browser.newPage()
        await page.goto('https://www.google.com.ar')
        await browser.close()

    }, 30000)
});
