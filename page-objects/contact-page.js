const { By } = require("selenium-webdriver");

class ContactPage {
  constructor(driver) {
    this.driver = driver;
    this.nameInput = By.css('[name="name"]');
    this.emailInput = By.css('[name="email"]');
    this.submitButton = By.css('[type="submit"]');
    this.successMsg = By.css('[data-testid="cta-modal"]');
    this.contactAgentBtn = By.css('[data-cy="contact-agent-button"]');
    this.successMsg = By.css('[data-testid="cta-modal"]');
  }

  async clickOnAgentContactBtn() {
    const contactAgentBtn = await this.driver.findElement(this.contactAgentBtn);
    await contactAgentBtn.click();
  }

  async fillContactForm(name, email) {
    const nameInput = await this.driver.findElement(this.nameInput);
    await nameInput.sendKeys(name);
    const emailInput = await this.driver.findElement(this.emailInput);
    await emailInput.sendKeys(email);
    const submitButton = await this.driver.findElement(this.submitButton);
    // await submitButton.click(); < -- Disabled for now to avoid sending fake leads
    const successMsg = await this.driver.findElement(this.successMsg);
    return await successMsg.getText();
  }

  async getSuccessMessage() {
    const verifyMsg = await this.driver.findElement(this.successMsg);
    return verifyMsg;
  }
}

module.exports = { ContactPage };
