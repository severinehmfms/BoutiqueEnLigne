import Article from './Article.js';

export default class Cart {
    /* Propriétés privées */
    #idCart;
    #creationDate;
    #listOfProducts;
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
    constructor(idCart = Date.now(), creationDate = new Date(), validationCartDate = null) {
        if (typeof idCart !== 'number') {
            throw new Error("l'idCart du panier doit être un nombre");
        }

        //Vérification des valeurs vides
        if(isNaN(idCart)) {
            throw new Error("idCart ne peut être NaN.")
        }

        /* Vérifier que créationDate existe et qu'il est de type Date */
        if (creationDate && !(creationDate instanceof Date)) {
            throw new Error("CreationDate du panier doit être une date");
        }

        /** @type {Article[]} */
        this._listOfproducts = [];

        /** @type {Date} */
        this._validationCartDate = validationCartDate;
        this._idCart = idCart;
        this._creationDate = creationDate;
    }


    /* Les Getters */
    get idCart() {
        return this.#idCart;
    }

    get creationDate() {
        return this.#creationDate;
    }

    get listOfArticles() {
        return this.#listOfProducts;
    }

    get validationCartDate() {
        return this.#validationCartDate;
    }

    /* Les Setters */

    set creationDate(value) {
        /* Vérifier que créationDate existe et qu'il est de type Date */
        if (value && !(value instanceof Date)) {
            throw new Error("CreationDate du panier doit être une date");
        }
        this._creationDate = value;
    }

    set idCart(value) {
        if (typeof value !== 'number') {
            throw new Error("value du panier doit être un nombre");
        }
        //Vérification des valeurs vides
        if(isNaN(value)) {
            throw new Error("value ne peut être NaN.")
        }
        this._idCart = value;
    }

    set listOfProducts(value) {
        this.#listOfProducts = value;
    }

    set validationCartDate(newDate){
        this.#validationCartDate = newDate;
    }

    /**
     *
     * @param {Article} newArticle - L'article à ajouter
     * @param {number} quantity - la quantité à ajouter
     */
    increaseQuantity(newArticle, quantity) {
        //Vérifier newArticle
        if (newArticle instanceof Article){
            const productDictionary  = { 'idArticle': newArticle.reference, 'nom': newArticle.nom,
                'appellation': newArticle.appellation, 'prix' : newArticle.prix,
                'idCategorie' : newArticle.idCategorie, 'quantity' : quantity };

            // Recherche si un idArticle est déjà présent dans la liste de produits 
            const isPresentInList = this.#listOfProducts.some(product => product.idArticle === newArticle.reference);

            if (isPresentInList){
                console.log(`${newArticle} est déjà présent dans la liste`);
                // Modification de la quantité 
                isPresentInList.quantity = isPresentInList.quantity + quantity;
                console.log(`la quantité a été augmentée, elle est maintenant de ${isPresentInList.quantity}`);
            }
        } else {
            console.error("Erreur : l'élément à ajouter doit être un objet Article");
        }
    }

    /**
     *
     * @param {Article} article - dont la quantité sera réduite
     * @param {number} quantity - quantité à enlever de produits similaires
     */
    decreaseQuantity(decArticle, quantity) {
        // Vérifier decArticle 
        if (decArticle instanceof Article){

            // Recherche idArticle est déjà présent dans la liste de produits 
            const isPresentInList = this.#listOfProducts.some(product => product.idArticle === decArticle.reference);

            if (isPresentInList){
                console.log(`${decArticle} est bien présent dans la liste`);
                // Modification de la quantité 
                const isNewQuantityIsGreaterThanOne = isPresentInList.quantity - quantity > 1;

                if (isNewQuantityIsGreaterThanOne) {
                    console.log(`Diminution de la quantité ${isPresentInList.quantity}`)
                    isPresentInList.quantity = isPresentInList.quantity - quantity;
                    console.log(`la quantité maintenant de ${isPresentInList.quantity}`);
                } else {
                    // suppression du produit
                    this.removeProduct(decArticle);
                    console.log(`le produit est supprimé`);
                }
            } else {
                console.error(`La quantité ne peut être diminuée, le produit n'appartient pas au panier`);
            }
        } else {
            console.error("Erreur : l'élément à ajouter doit être un objet Article");
        }
    }

    /**
     * @param {Article} newArticle - L'article à créer dans le panier
     */
    addProduct(newArticle) {
        this.increaseByOne(newArticle)
    }

    /**
     *
     * @param {Article} delArticle - L'article à supprimer
     */
    removeProduct(delArticle) {
        if (delArticle instanceof Article) {

            const idArticle = delArticle.reference;

            // Recherche de l'index de suppression de la liste 
            const index = this.#listOfProducts.findIndex(product => product.idArticle === idArticle);

            // S'il est trouvé (différent de -1) 
            if(index !== -1 ) {
                this.#listOfProducts.splice(index, 1);
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
    increaseByOne(newArticle) {
        if (newArticle instanceof Article) {
            this.increaseQuantity(newArticle, 1);
        } else {
            console.error("Erreur : l'élément à incrémenté doit être un objet Article");
        }
    }

    /**
     *
     * @param {Article} decrArticle - L'article dont la quantité est à diminuer d'une unité
     */
    decreaseByOne(decrArticle) {
        if (decrArticle instanceof Article) {
            // vérifier si l'article est déjà présent dans le panier 
            // Recherche si un idArticle est déjà présent dans la liste de produits 
            const isPresentInList = this.#listOfProducts.some(product => product.idArticle === decrArticle.reference);

            if (isPresentInList) {
                console.log(`${decrArticle} est déjà présent dans la liste`);
                const originalQuantity = isPresentInList.quantity
                if (originalQuantity > 1) {
                    isPresentInList.quantity = originalQuantity - 1;
                    console.log(`Sa quantité a été diminuée d'une unité`);
                } else {
                    this.removeProduct(decrArticle);
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
