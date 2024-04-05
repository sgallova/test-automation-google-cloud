const HomePage = require("../../po/pages/googleCloud/home.page.js");
const SearchPage = require("../../po/pages/googleCloud/search.page.js");
const CalculatorPage = require("../../po/pages/googleCloud/calculator.page.js");

const homePage = new HomePage();
const searchPage = new SearchPage();
const calculatorPage = new CalculatorPage();

describe("Testsuite for checking the workflow of tasks 3 & 4", () => {
  beforeEach(async () => {
    await homePage.open();
  });

  it("should search for a legacy calculator on the Google cloud page", async () => {
    await homePage.header.searchIcon.click();
    await homePage.header.searchBar.setValue(
      "Google Cloud Platform Pricing Calculator"
    );
    await homePage.hitEnter();

    // wait for  the browser to be redirected to Search results and the page to be fully loaded
    await browser.waitUntil(async () => {
      (await browser.getUrl()) !== homePage.url;
      return await browser.execute(() => document.readyState === "complete");
    });

    //Assertion--> verify that the item Calculator legacy is listed in the search result
    await expect(
      searchPage.searchComponent.item("calculator_legacy")
    ).toBeDisplayed();

    it("should use the calculator to request an estimation for compute engine")
    // Go to the calculator page (legacy)
    await searchPage.searchComponent.item("calculator_legacy").click();

    // wait for  the browser to be redirected to Calculator and the page to be fully loaded
    await browser.waitUntil(async () => {
      (await browser.getUrl()) !== searchPage.url;
      return await browser.execute(() => document.readyState === "complete");
    });

    //Accesing to iFrames that contain the form
    await calculatorPage.computeFormComponent.iFrameParent.scrollIntoView();
    await browser.switchToFrame(await calculatorPage.computeFormComponent.iFrameParent);
    await browser.switchToFrame(await calculatorPage.computeFormComponent.iFrameChild);
   
 
    // Fillout the form
    await calculatorPage.computeFormComponent.numInstances.setValue("4");
    await calculatorPage.computeFormComponent.seriesDropdown.click();
    await calculatorPage.computeFormComponent.seriesN1Option.click();

   /* await calculatorPage.computeFormComponent.machineType.selectAttribute("value", "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8");
    await calculatorPage.computeFormComponent.gpuCheck.click();
    await calculatorPage.computeFormComponent.gpuType.selectByVisibleText("NVIDIA Tesla V100");
    await calculatorPage.computeFormComponent.gpuNumber.selectByVisibleText("1");
    await calculatorPage.computeFormComponent.localSSD.selectByVisibleText("2x375 GB");
    await calculatorPage.computeFormComponent.datacenterLocation.selectAttribute("value", "europe-west3");
    await calculatorPage.computeFormComponent.committedUsage.selectByVisibleText("1 Year");*/

  
 

  });
});
