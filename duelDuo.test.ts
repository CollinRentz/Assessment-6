
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Wins show up when page loads', async () => {
    const wins = await driver.findElement(By.id('wins'))
    const displayed = await wins.isDisplayed()
    expect(displayed).toBe(true)
})

test('Losses show up when page loads', async () => {
    const losses = await driver.findElement(By.id('losses'))
    const displayed = await losses.isDisplayed()
    expect(displayed).toBe(true)
})