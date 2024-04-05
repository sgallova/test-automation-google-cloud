class EmailModalComponent {
  get emailField() {
    return $("//md-dialog-actions/input[2]");
  }

  get sendEmailBtn() {
    return $('//*[@id="input_603"]');
  }
}

module.exports = EmailModalComponent;
