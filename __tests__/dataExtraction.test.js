const puppeteer = require('puppeteer')

describe('Data extraction puppeteer test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        jest.setTimeout(1000);
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
    });

    afterEach(async () => {
        page = '';
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
        page.setDefaultTimeout(10000);
        page.setDefaultNavigationTimeout(10000);
        await page.goto('https://google.com/', {
            waitUntil: 'networkidle2'
        });
    },10000);

    it('should get page title and url', async () => {
        const title = await page.title()
        const url = await page.url()
    }, 30000)

    it('should get button info', async () => {

        const searchButton = await page.waitForXPath('//input[@name="btnK"]')
        const buttonText = await page.$eval(searchButton, (button) => button.textContent)

    }, 30000)

    it('should count elements', async () => {
        const [imagesCount] = await page.$$eval('img', (images) => images.length)
        console.log(imagesCount)

    }, 30000)
});
