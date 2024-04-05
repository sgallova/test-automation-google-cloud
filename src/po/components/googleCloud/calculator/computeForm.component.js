class ComputeFormComponent {

  get iFrameParent(){
    return $('iframe[src^="https://cloud.google.com/frame/products/calculator-legacy"]');
  }
  get iFrameChild(){
    return $('#myFrame');
  }
  get computeEngine(){
    return $('//span[text()="Compute Engine"]/../../..');
  }
  get numInstances() {
    return $('input[ng-model="listingCtrl.computeServer.quantity"]');
  }

  get oSDropdown() {
    return $('md-select[ng-model="listingCtrl.computeServer.os"]');
  }

  get provisioningModel() {
    return $('md-select[ng-model="listingCtrl.computeServer.class"]');
  }

  get machineFamily() {
    return $('md-select[ng-model="listingCtrl.computeServer.family"]');
  }

  get seriesDropdown() {
    return $('#select_value_label_95');
  }

  get seriesN1Option() {
    return $('md-option[value="n1"]');
  }


  get machineType() {
    return $('md-select[ng-model="listingCtrl.computeServer.instance"]');
  }

  get gpuCheck() {
    return $('md-checkbox[ng-model="listingCtrl.computeServer.addGPUs"]');
  }

  get gpuType() {
    return $('md-select[ng-model="listingCtrl.computeServer.gpuType"]');
  }

  get gpuNumber() {
    return $('md-select[ng-model="listingCtrl.computeServer.gpuCount"]');
  }

  get localSSD() {
    return $('md-select[ng-model="listingCtrl.computeServer.ssd"]');
  }

  get datacenterLocation() {
    return $('md-select[ng-model="listingCtrl.soleTenant.location"]');
  }

  get committedUsage() {
    return $('md-select[ng-model="listingCtrl.soleTenant.cud"]');
  }
}

module.exports = ComputeFormComponent;
