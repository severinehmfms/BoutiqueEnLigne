import Article from './Article';

export default class Cart {
    /* Propriétés privées */
    #idCart;
    #creationDate;
    #listOfArticles;
    #validationCartDate

    /**
     * Constructeur avec des éléments, l'id et la date de création du panier
     * 
     * @param {number} idCart - l'identifiant du panier
     * @param {Date} creationDate - la date de création du panier de type Date
     * @param {Date} validationCartDate - la date de validation du panier de type Date 
     * 
     * Si creationDate n'est pas défini alors c'est la date d'instantiation
     * de l'objet qui est prise en compte.
     * Si validationCartDate n'est pas défini, par défaut, ce paramètre est null
     */
    constructor(idCart, creationDate = newDate(), validationCartDate = null) {
        if (typeof idCart !== 'number') {
            throw new Error("l'idCart du panier doit être un nombre");
        }

        //Vérification des valeurs vides
        if(isNaN(idCart)) {
            throw new Error("idCart ne peut être NaN.")
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
        this.validationCartDate = validationCartDate;
    }


    /* Les Getters */
    get idCart() {
        return this.#idCart;
    }

    get creationDate() {
        return this.#creationDate;
    }

    get listOfArticles() {
        return this.#listOfArticles;
    }

    get validationCartDate() {
        return this.#validationCartDate;
    }

    /* Les Setters */

    set validationCartDate(newDate){
        this.#validationCartDate = newDate;
    }

    /**
     *
     * @param {Article} newArticle - L'article à ajouter
     */
    addArticle(newArticle) {
        if (newArticle instanceof Article) {
            /* vérifier si l'article est déjà présent dans le panier */
            const isArticleExists = this.listOfArticles.find(
                (article) => article.getReference === newArticle.getReference
            );
            if (isArticleExists) {
                console.log(`${newArticle} est déjà présent dans la liste`);
                let quantity = newArticle.quantity;
                let originalQuantity = isArticleExists.quantity
                isArticleExists.quantity = originalQuantity + quantity
                console.log(`Sa quantité a été augmentée`);
            } else {
                this.listOfArticles.push(newArticle);
                console.log(`${newArticle} a été ajouté à la liste des articles ${this.listOfArticles}`);
            }

        } else {
            console.error("Erreur : l'élément à ajouter doit être un objet Article");
        }
    }

    /**
     *
     * @param {Article} delArticle - L'article à supprimer
     */
    removeArticle(delArticle) {
        if (delArticle instanceof Article) {

            const index = this.listOfArticles.findIndex((article) => article.getReference === delArticle.getReference);

            /* S'il est trouvé (différent de -1) */
            if(index !== -1 ) {
                this.listOfArticles.splice(index, 1);
                console.log(`L'article a été supprimé du panier`);
            } else {
            console.error("Erreur : pas d'article trouvé dans la liste");
            }
        } else {
            console.error("Erreur : l'élément à supprimer doit être un objet Article");
        }
    }

        /**
     *
     * @param {Article} newArticle - L'article dont la quantité est à augmenter d'une unité
     */
    increaseArticleQuantity(newArticle) {
        if (newArticle instanceof Article) {
            /* vérifier si l'article est déjà présent dans le panier */
            const isArticleExists = this.listOfArticles.find(
                (article) => article.id === newArticle.getReference
            );
            if (isArticleExists) {
                console.log(`${newArticle} est déjà présent dans la liste`);
                let originalQuantity = isArticleExists.quantity
                isArticleExists.quantity = originalQuantity + 1;
                console.log(`Sa quantité a été augmentée d'une unité`);
            } else {
                this.listOfArticles.push(newArticle);
                console.log(`${newArticle} a été ajouté à la liste des articles ${this.listOfArticles}`);
            }

        } else {
            console.error("Erreur : l'élément à incrémenté doit être un objet Article");
        }
    }

    /**
     *
     * @param {Article} decrArticle - L'article dont la quantité est à diminuer d'une unité
     */
    decreaseArticleQuantity(decrArticle) {
        if (decrArticle instanceof Article) {
            /* vérifier si l'article est déjà présent dans le panier */
            const isArticleExists = this.listOfArticles.find(
                (article) => article.id === newArticle.getReference
            );
            if (isArticleExists) {
                console.log(`${newArticle} est déjà présent dans la liste`);
                const originalQuantity = isArticleExists.quantity
                if (originalQuantity > 1) {
                    isArticleExists.quantity = originalQuantity - 1;
                    console.log(`Sa quantité a été diminuée d'une unité`);
                } else {
                    removeArticle(decrArticle);
                }
            } else {
                console.log(`${decrArticle} n'est pas présent dans la liste des articles ${this.listOfArticles}`);
            }

        }  else {
            console.error("Erreur : l'élément à ajouter doit être un objet Article");
        }
    }

    /* Méthode d'affichage des paramètres de la classe */
    toString() {
        return `${this.idCart} ${this.creationDate.toLocaleDateString()} ${this.listOfArticles} ${this.validationCartDate.toLocaleString()}`;
    }
}