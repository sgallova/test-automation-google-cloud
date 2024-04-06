const HomePage = require("../../po/pages/googleCloud/home.page.js");
const SearchPage = require("../../po/pages/googleCloud/search.page.js");
const CalculatorPage = require("../../po/pages/googleCloud/calculator.page.js");

const homePage = new HomePage();
const searchPage = new SearchPage();
const calculatorPage = new CalculatorPage();

describe("Testsuite for checking the workflow of tasks 3 & 4", () => {


  it("should search for a legacy calculator on the Google cloud page", async () => {
    await homePage.open();
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
      await searchPage.searchComponent.item("calculator_legacy")
    ).toBeDisplayed();

  });

  it("should use the calculator to request an estimation for compute engine", async () => {
    // Go to the calculator page (legacy)
    await searchPage.searchComponent.item("calculator_legacy").waitForClickable({timeout:5000});
    await searchPage.searchComponent.item("calculator_legacy").click();

    // wait for  the browser to be redirected to Calculator and the page to be fully loaded
    await browser.waitUntil(async () => {
      (await browser.getUrl()) !== searchPage.url;
      return await browser.execute(() => document.readyState === "complete");
    });

    //Accesing to iFrames that contain the form
    await browser.switchToFrame(await calculatorPage.computeFormComponent.iFrameParent);
    await browser.switchToFrame(await calculatorPage.computeFormComponent.iFrameChild);
   
 
    // Fillout the form
    await calculatorPage.computeFormComponent.numInstances.setValue("4");
    await calculatorPage.computeFormComponent.seriesDropdown.click();
 
    await calculatorPage.computeFormComponent.seriesN1Option.waitForClickable({timeout:5000});
    await calculatorPage.computeFormComponent.seriesN1Option.click();
  
    await calculatorPage.computeFormComponent.machineType.click();
    await calculatorPage.computeFormComponent.machineS8Option.waitForClickable({timeout:5000});
    await calculatorPage.computeFormComponent.machineS8Option.click();

    await calculatorPage.computeFormComponent.gpuCheck.click();

    await calculatorPage.computeFormComponent.gpuType.click();
    await calculatorPage.computeFormComponent.gpuTypeT4Option.waitForClickable({timeout:5000});
    await calculatorPage.computeFormComponent.gpuTypeT4Option.click();

    await calculatorPage.computeFormComponent.gpuNumber.click();
    await calculatorPage.computeFormComponent.gpuNumberOne.waitForClickable({timeout:5000});
    await calculatorPage.computeFormComponent.gpuNumberOne.click();
   
    await calculatorPage.computeFormComponent.localSSD.click();
    await calculatorPage.computeFormComponent.localSSDTwo.waitForClickable({timeout:5000});
    await calculatorPage.computeFormComponent.localSSDTwo.click();

    await calculatorPage.computeFormComponent.committedUsage.click();
    await calculatorPage.computeFormComponent.comittedOneYear.waitForClickable({timeout:5000});
    await calculatorPage.computeFormComponent.comittedOneYear.click();


    await calculatorPage.computeFormComponent.addEstimateBtn.waitForClickable({timeout:5000});
    await calculatorPage.computeFormComponent.addEstimateBtn.click();

    //Assertion--> After sending the estimation, the form is cleaned up
    browser.switchToFrame(null);
    expect(await calculatorPage.computeFormComponent.numInstances).toHaveValue("");

  });
});
