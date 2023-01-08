const { Given, When, Then } = require('@wdio/cucumber-framework');

const homepage = require('../pageobjects/homepage');
const menupage = require('../pageobjects/menupage');
const Page = require('../pageobjects/page');
const SubMenuPage = require('../pageobjects/fitur');

Given('I am on Homepage', async() => {
    await homepage.open()
})

// ELEMENT CODE //
When('I am click menu element', async() => {
    await homepage.clickbtnSubmitElement()
    await browser.pause(1000)
})

When('I am click sub menu buttons', async() => {
    await menupage.clickbtnbuttons()
    await browser.pause(1000)
})

When('I am click double click', async() => {
    await SubMenuPage.doubleclick()
})

When('I am click right click', async() => {
    await SubMenuPage.clickrightme()
})
When('I am click click me', async() => {
    await SubMenuPage.oneclick()
    await browser.pause(1000)
    await SubMenuPage.clickBrowserBackBtn()
    await browser.pause(2000)
})

// INTERACTION CODE //

When('I am click menu interaction', async() => {
    await homepage.clickbtnSubmitinteraction()
    await browser.pause(2000)
})

When('I am click sub menu dropable', async() => {
    await menupage.clickbtnDropable()
})

When('I am click drag and drop', async() => {
    await SubMenuPage.trydropbtn()
})
