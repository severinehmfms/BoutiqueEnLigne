// Définition de la classe et exportation
export default class Cart {
    constructor(idCart) {
        this.idCart = idCart;
        this.creationDate = new Date();
        this.listOfArticles = null;
        this.validationCartDate = null;

    }

    constructor(idCart, creationDate) {
        this.idCart = idCart;
        this.creationDate = creationDate;
    }

    toString() {
        return `${this.idCart} ${this.creationDate.toLocaleDateString()} ${this.listOfArticles} ${this.validationCartDate.toLocaleString()}`;
    }
}