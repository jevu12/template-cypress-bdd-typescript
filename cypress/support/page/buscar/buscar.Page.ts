import {Page} from "../Page";

export class buscarPage extends Page{
    constructor() {
        const elements = {
            inputBuscar: '.SDkEP',
        }
        super(elements);
    }

    public clickOnBuscar() {
        this.goToClick(this.elements.inputBuscar)
    }
    public fillBuscar(b) {
        this.type(this.elements.inputBuscar, b)
    }

    public irAUrl(url) {
        this.goTo(url)
    }
    public seeInScreen(screen) {
        this.see(screen)
    }
    public toEnter() {
        this.enter(this.elements.inputBuscar)
    }

}