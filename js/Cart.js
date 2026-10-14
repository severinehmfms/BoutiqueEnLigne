// Définition de la classe et exportation
export default class Cart {
    /* Constructeur avec un seul paramètre l'id du panier */
    constructor(idCart) {
        this.idCart = idCart;
        this.creationDate = new Date();
        this.listOfArticles = null;
        this.validationCartDate = null;
    }

    /* Constructeur avec des éléments, l'id et
    * la date de création du panier */
    constructor(idCart, creationDate) {
        this.idCart = idCart;
        this.creationDate = creationDate;
        this.listOfArticles = null;
        this.validationCartDate = null;
    }

    get idCart() {
        return this.idCart;
    }

    get creationDate() {
        return this.creationDate;
    }

    get listOfArticles() {
        return this.listOfArticles;
    }

    get validationCartDate() {
        return this.validationCartDate;
    }

    /* Méthode d'affichage des paramètres de la classe */
    toString() {
        return `${this.idCart} ${this.creationDate.toLocaleDateString()} ${this.listOfArticles} ${this.validationCartDate.toLocaleString()}`;
    }
}