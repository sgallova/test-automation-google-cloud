const BasePage = require("./base.page.js");

class HomePage extends BasePage {
  constructor() {
    super("https://cloud.google.com/?hl=en");
  }
}

module.exports = HomePage;
