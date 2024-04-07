class EmailModalComponent {
  get emailField() {
    return $('input[ng-model="emailQuote.user.email"]');
  }

  get sendEmailBtn() {
    return $(
      'button[ng-click="emailQuote.emailQuote(true); emailQuote.$mdDialog.hide()"]'
    );
  }
}

module.exports = EmailModalComponent;
