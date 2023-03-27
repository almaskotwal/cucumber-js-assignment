const { setWorldConstructor, After } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

class CustomWorld {
  constructor() {
    this.driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options().headless())
      .build();
  }
}

setWorldConstructor(CustomWorld);

After(async function () {
  const handles = await this.driver.getAllWindowHandles();
  if (handles.length > 1) {
    await this.driver.close();
    await this.driver.switchTo().window(handles[0]);
  }
  await this.driver.quit();
});