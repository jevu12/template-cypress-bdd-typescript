Feature: Realizar una busqueda en google
  Scenario: Buscar en google
    Given que estoy en la pagina de google
    When busco por la palabra cypress
    Then veo el resultado de la busqueda
