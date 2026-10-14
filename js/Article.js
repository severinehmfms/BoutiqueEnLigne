// Définition de la classe et exportation
export default class Article {
    constructor(reference, nom, appellation, prix) {
        if (typeof reference !== 'string' || typeof nom !== 'string' || typeof prix !== 'number') {
            throw new Error("Paramètres invalides : la référence et le nom doivent être une chaîne, et le prix un nombre.");
        }
        /** @type {string} */
        this.reference = reference;
        /** @type {string} */
        this.nom = nom;
        /** @type {string} */
        this.appellation = appellation;
        /** @type {number} */
        this.prix = prix;
        /** @type {number}  */
        this.quantity = 0;

    }

    get reference() {
        return this.reference;
    }

    get nom() {
        return this.nom
    }

    get appellation() {
        return this.appellation;
    }

    get prix() {
        return this.prix;
    }

    get quantity() {
        return this.quantity;
    }

    setPrix(prix) {
        this.prix = prix;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }



    greet() {
        return `Article référence ${this.reference} - Nom ${this.nom} - Appellation :  ${this.appellation} - Prix : ${this.prix}`;
    }
}