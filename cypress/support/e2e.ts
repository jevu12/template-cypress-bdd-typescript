import './commands'
require('cypress-xpath')

Cypress.on('uncaught:exception', (err) => {
    // Ignorar errores de excepción no capturados
    return false;
});


