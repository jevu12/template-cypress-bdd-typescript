import {Element} from './interfaces';

export abstract class Page {
    protected readonly elements: Element;

    protected constructor(elements: Element) {
        this.elements = elements;
    }

    protected goTo(url: string) {
        cy.visit(url);
    }

    protected goToClick(selector: string) {
        cy.get(selector).click();
    }

    protected see(screen) {
        cy.viewport(screen);
    }

    protected type(selector: string, text: string) {
        cy.get(selector).type(text);
    }

    protected enter(selector: string) {
        cy.get(selector).type('{enter}');
    }
    protected validateText(selector: string, text: string) {
        cy.get(selector).should('have.text', text);
    }

}

