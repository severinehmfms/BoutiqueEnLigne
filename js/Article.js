// Définition de la classe et exportation
export default class Article {
    constructor(reference, nom, appellation, prix, idCategorie) {
        if ( typeof nom !== 'string' || typeof prix !== 'number') { //typeof reference !== 'string' ||
            throw new Error("Paramètres invalides : le nom doit être une chaîne, et le prix un nombre.");
        }
        this.reference = reference;
        this.nom = nom;
        this.appellation = appellation;
        this.prix = prix;
        this.idCategorie = idCategorie;
    }

    greet() {
        return `Article référence ${this.reference} - Nom ${this.nom} - Appellation :  ${this.appellation} - Prix : ${this.prix}`;
    }
}