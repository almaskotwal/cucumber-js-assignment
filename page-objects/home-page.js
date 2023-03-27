const { By } = require("selenium-webdriver");

class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.url = "https://www.remax.ca/";
    this.searchInput = By.id("home-search-input");
    this.searchListAutoComplete = By.css("#home-search-menu li");
  }

  async navigateTo() {
    await this.driver.get(this.url);
  }

  async searchFor(query) {
    const searchInput = await this.driver.findElement(this.searchInput);
    await searchInput.sendKeys(query);
    await this.driver.sleep(1000);
  }

  async selectOptionFromDropdown(optionText) {
    const searchListAutoComplete = await this.driver.findElements(
      this.searchListAutoComplete
    );
    for (let i = 0; i < searchListAutoComplete.length; i++) {
      const searchTexts = await searchListAutoComplete[i].getText();
      if (searchTexts.includes(optionText)) {
        await searchListAutoComplete[i].click();
        break;
      }
    }
  }
}

module.exports = {
  HomePage,
};
