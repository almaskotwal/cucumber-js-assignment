const { By, Key, until, WebDriver } = require("selenium-webdriver");
const { assert } = require("chai");

class ResultPage {
  driver;
  baseUrl;
  allResultCards;

  constructor(driver, baseUrl) {
    this.driver = driver;
    this.baseUrl = baseUrl;
    this.allResults = this.driver.findElements(
      By.css('[data-testid="result-card"]')
    );
  }

  async searchForCity(city) {
    await this.searchInput.sendKeys(city, Key.RETURN);
  }

  async selectFirstResult() {
    const firstResult = await `${this.allResultCards}]:first-of-type`;
    firstResult.click();
  }
}

module.exports = HomePage;
