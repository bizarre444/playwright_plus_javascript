describe('Start ', function() {
    describe('Bla-bla-bla', async() => {
        it('start page', async({ page }) => {
            const browser = await launch();
            const page = await browser.newPage();
            await page.goto('https://google.com')
            const url = page.url();
            await expect(url).should.equal('https://google.com');
        });
    });
});