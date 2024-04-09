class MailComponent {
  get randomMail() {
    return $('//span[@class="genytxt"]');
  }

  get inboxBtn() {
    return $$('button[class="md but text f24 egenbut"]')[2];
  }

  get cost() {
    return $$('h3')[1];
  }

  get add(){
    return $('iframe#ad_iframe');
  }

  get inboxIframe(){
    return $('iframe#ifmail');
  }

}

module.exports = MailComponent;
