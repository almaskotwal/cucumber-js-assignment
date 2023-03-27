const { By, until } = require("selenium-webdriver");

class PropertyPage {
  constructor(driver) {
    this.driver = driver;
    this.listingCards = By.css('[data-cy="listing-card"]');
    this.contactAgentBtn = By.css('[data-cy="contact-agent-button"]');
    this.firstPropertyAddress = By.css('[data-cy="property-address"]');
    this.buyButton = By.className("header-buy-button");
    this.agentName = By.css('[data-cy="agent-name"]');
  }

  async selectFirstListingCard() {
    const listingCards = await this.driver.findElements(this.listingCards);
    const firstListingCard = listingCards[0];
    await firstListingCard.click();
    await this.driver.sleep(1000);
  }
}

module.exports = {
  PropertyPage,
};
