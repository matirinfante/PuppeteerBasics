const puppeteer = require('puppeteer')

describe('Timeout puppeteer test', () => {
    it('should open and close the browser', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
            defaultViewport: null,
        })
        const page = await browser.newPage()
        await page.goto('https://www.google.com.ar', {waitUntil: 'networkidle0'})

        //await page.waitForSelector('button', {hidden: true})
        //await page.waitForXPath('//input[@value = \"Buscar con Google\"]')
        //await page.waitForFunction(() => !document.querySelector('#some-selector'))
    }, 30000)
});
