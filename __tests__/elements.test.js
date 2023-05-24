const puppeteer = require("puppeteer");
describe('Element interaction practice', function () {
    it('should be able to click elements', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
            defaultViewport: null,
        })
        const page = await browser.newPage()

        //Alert handler
        page.on('dialog', async (dialog) => {
            await dialog.accept()

        })

        // Right simple click
        // await page.click('#authentication > span', { button: 'right', delay:500})

        //Double click
        await page.click('#authentication > button', {clickCount: 2, delay: 500})
    });

    it('should be able to complete a form', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
            defaultViewport: null,
        })
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Fernando Alonso', {delay: 100})
        await page.click('#windows')

        await page.click('#remote-testing')

        //For dropdowns
        await page.select('#preferred-interface', 'JavaScript API')

        await page.click('#tried-test-cafe')

        await page.type('#comments', '33', {delay: 100})
        await page.click('#submit-button')


        await new Promise(r => setTimeout(r, 3000));

        await browser.close()
    }, 30000);
});
