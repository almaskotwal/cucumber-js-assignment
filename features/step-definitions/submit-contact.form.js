const { Before, When, Then, Given, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { Builder, By, until } = require("selenium-webdriver");
const { setDefaultTimeout } = require("@cucumber/cucumber");
const { HomePage } = require("../../page-objects/home-page");
const { PropertyPage } = require("../../page-objects/property-page");
const { ContactPage } = require("../../page-objects/contact-page");

const newPageUrl = "https://www.remax.ca/ab";
const name = "John Doe";
const email = "johndoe@gmail.com";

setDefaultTimeout(15000);

let driver;
let homePage;
let propertyPage;
let contactPage;

Before(async function () {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();

  homePage = new HomePage(driver);
  propertyPage = new PropertyPage(driver);
  contactPage = new ContactPage(driver);
});

Given("I am on remax.ca", async function () {
  await homePage.navigateTo();
});

When("I search for {string}", async function (string) {
  await homePage.searchFor(string);
});

Then("I select {string} in the dropdown", async function (string) {
  await homePage.selectOptionFromDropdown(string);
});

Then('I select the first property', async function () {
  await propertyPage.selectFirstListingCard();
  const handles = await driver.getAllWindowHandles();
  await driver.switchTo().window(handles[1]); // Switch to new window
});

Then("I click on {string} button", async function (string) {
  await contactPage.clickOnAgentContactBtn();
});

Then('I fill out the contact form', async function () {
  await contactPage.fillContactForm(name, email);
});

Then("I should see a success message", async function () {
  const successMsg = await contactPage.getSuccessMessage();
  const successMsgText = await successMsg.getText();
  expect(successMsg).to.not.be.null;
});

After(async function () {
  const handles = await driver.getAllWindowHandles();
  if (handles.length > 1) {
    await driver.close();
    await driver.switchTo().window(handles[0]);
  }
  await driver.quit();
});
