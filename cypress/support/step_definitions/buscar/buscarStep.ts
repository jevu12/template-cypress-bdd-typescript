import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {buscarPage} from "../../page/buscar/buscar.Page"

const buscar = new buscarPage();

Given('que estoy en la pagina de google', () => {
    buscar.seeInScreen("macbook-15")
    buscar.irAUrl("/")
});

When('busco por la palabra cypress', () => {
    buscar.clickOnBuscar()
    buscar.fillBuscar("cypress")
    buscar.toEnter()

});

Then('veo el resultado de la busqueda', () => {});
