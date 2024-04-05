class SearchComponent {

  get legacyItem(){
return $('//a[@track-metadata-eventdetail="cloud.google.com/products/calculator-legacy"]');
  }

  item(name) {
    const links = {
      calculator: "https://cloud.google.com/products/calculator",
      calculator_legacy:"https://cloud.google.com/products/calculator-legacy?hl=es-419",
      pricing: "https://cloud.google.com/pricing"
    };

    let selector= `a[href="${links[name]}"]`;
    return $(selector);
  }

}

module.exports = SearchComponent;
