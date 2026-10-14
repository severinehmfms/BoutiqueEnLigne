import Article from './Article';

export default class Cart {
    /* Constructeur avec un seul paramètre l'id du panier */
    /**
     * @param {number} idCart - l'identifiant du panier
     */
    constructor(idCart) {
        if (typeof idCart !== 'number') {
            throw new Error("l'id du panier doit être un nombre");
        }
        /** @type {number} */
        this.idCart = idCart;

        /** @type {Date} */
        this.creationDate = new Date();

        /** @type {Article[]} */
        this.listOfArticles = [];

        /** @type {Date} */
        this.validationCartDate = null;
    }

    /* Constructeur avec des éléments, l'id et la date de création du panier */
    /**
     *
     * @param {number} idCart - l'identifiant du panier
     * @param {Date} creationDate - la date de création du panier de type Date
     */
    constructor(idCart, creationDate) {
        if (typeof idCart !== 'number') {
            throw new Error("l'idCart du panier doit être un nombre");
        }

        /** @type {number} */
        this.idCart = idCart;
        /* Vérifier que créationDate existe et qu'il est de type Date */
        if (creationDate && !(creationDate instanceof Date)) {
            throw new Error("CreationDate du panier doit être une date");
        }

        /** @type {Date} */
        this.creationDate = creationDate;

        /** @type {Article[]} */
        this.listOfArticles = [];

        /** @type {Date} */
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

    /**
     *
     * @param {Article} newArticle - L'article à ajouter
     */
    addArticle(newArticle) {
        if (newArticle instanceof Article) {
            /* vérifier si l'article est déjà présent dans le panier */
            const isArticleExists = this.listOfArticles.find(
                (article) => article.id === newArticle.id
            );
            if (isArticleExists) {
                isArticleExists.quantity++;
            } else {
                this.listOfArticles.push(newArticle);
            }
            console.log(`${newArticle} a été ajouté à la liste des articles ${this.listOfArticles}`);

        } else {
            console.error("Erreur : l'élément à ajouter soit être un objet Article");
        }
    }

    /* Méthode d'affichage des paramètres de la classe */
    toString() {
        return `${this.idCart} ${this.creationDate.toLocaleDateString()} ${this.listOfArticles} ${this.validationCartDate.toLocaleString()}`;
    }
}