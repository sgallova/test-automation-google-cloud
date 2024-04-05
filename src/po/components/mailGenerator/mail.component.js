class MailComponent {
  get randomMail() {
    return $('//span[@class="genytxt"]/script');
  }

  get inboxBtn() {
    return $('//span[text()="Check Inbox"]/..');
  }
}

module.exports = MailComponent;
