class MailComponent {
  get randomMail() {
    return $('//span[@class="genytxt"]');
  }

  get inboxBtn() {
    return $$('button[class="md but text f24 egenbut"]')[2];
  }

  get cost() {
    return $$("table")[1].$("tbody").$("tr")[1].$("td")[4];
  }
}

module.exports = MailComponent;
