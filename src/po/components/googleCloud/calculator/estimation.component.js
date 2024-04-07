class EstimationComponent {
  get totalCost() {
    return $('//div[@class="cpc-cart-total"]//b[@class="ng-binding"]');
  }

  get emailBtn() {
    return $('button[id="Email Estimate"]');
  }
}

module.exports = EstimationComponent;
