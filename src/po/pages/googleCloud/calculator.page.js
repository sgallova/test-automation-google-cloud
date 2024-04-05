const BasePage= require("./base.page.js");
const ProductComponent = require("../../components/googleCloud/calculator/product.component.js");
const ComputeFormComponent = require("../../components/googleCloud/calculator/computeForm.component.js");
const EstimationComponent = require("../../components/googleCloud/calculator/estimation.component.js");
const EmailModalComponent = require("../../components/googleCloud/calculator/emailModal.component.js");


class CalculatorPage extends BasePage{

    constructor(){
        super("https://cloud.google.com/products/calculator-legacy");
        this.productComponent= new ProductComponent();
        this.computeFormComponent= new ComputeFormComponent();
        this.estimationComponent= new EstimationComponent();
        this.emailModalComponent= new EmailModalComponent();
    }
}

module.exports= CalculatorPage