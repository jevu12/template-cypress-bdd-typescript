import './commands'
require('cypress-xpath')
import '@mmisty/cypress-allure-adapter/support';


Cypress.on('uncaught:exception', (err) => {
    // Ignorar errores de excepción no capturados
    return false;
});


