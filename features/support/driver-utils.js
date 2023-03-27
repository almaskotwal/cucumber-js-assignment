const { Builder, webdriver } = require("selenium-webdriver");

exports.initDriver = () => {
  driver = new Builder().forBrowser("chrome").build();
  return driver;
};

async function maximizeWindow() {
  await driver.manage().window().maximize();
}

async function getWindowHandle(driver) {
  const handle = await driver.getWindowHandle(driver);
  return handle;
}

module.exports = {
  getWindowHandle,
};
