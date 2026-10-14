// Définition de la classe et exportation
export default class Article {
    constructor(reference, nom, appellation, prix) {
        if (typeof reference !== 'string' || typeof nom !== 'string' || typeof prix !== 'number') {
            throw new Error("Paramètres invalides : la référence et le nom doivent être une chaîne, et le prix un nombre.");
        }
        this.reference = reference;
        this.nom = nom;
        this.appellation = appellation;
        this.prix = prix;
    }

    greet() {
        return `Article référence ${this.reference} - Nom ${this.nom} - Appellation :  ${this.appellation} - Prix : ${this.prix}`;
    }
}