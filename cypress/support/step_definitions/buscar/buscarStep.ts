import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {buscarPage} from "../../page/buscar/buscar.Page"

const buscar = new buscarPage();

Given('que estoy en la pagina de google', () => {
    cy.allure()
        .story('El usuario puede iniciar sesión con credenciales válidas');

    cy.allure()
        .feature('Búsqueda')
        .story('El usuario puede buscar en Google')
        .epic('Búsquedas en la Web')
        .severity('critical')
        .owner('Jorge Vasquez')
        .tag('PrioridadAlta', 'Sprint2')
        .issue('JIRA-123')
        .label('testId', 'TC-456')  // Aquí reemplazamos testId con label
        .parameter('Término de búsqueda', 'Cypress Testing');
    buscar.seeInScreen("macbook-15")
    buscar.irAUrl("/")
});

When('busco por la palabra cypress', () => {
    buscar.clickOnBuscar()
    buscar.fillBuscar("cypress")
    buscar.toEnter()

});

Then('veo el resultado de la busqueda', () => {});
