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
        await page.waitForSelector('img')

        //For reloading
        await page.reload()

        //Moving back
        await page.goBack()

        //Moving forward
        await page.goForward()

        const platziPage = await browser.newPage()
        await platziPage.goto('https://platzi.com')

        await browser.close()

    }, 30000)
});
