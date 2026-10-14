// Définition de la classe et exportation
export default class Article {
    /* Propriétés privées */
    #reference;
    #nom;
    #appellation;
    #prix;
    #quantity;
    #volume;

    /**
     * Constructeur de la classe Article
     * 
     * @param {number} reference - correspond à l'id_article dans le fichier JSON
     * @param {string} nom - nom du châteur par exemple
     * @param {string} appellation - appelation de l'article vin 
     * @param {number} prix - prix de l'article vin
     * @param {number} quantity - quantité de l'article vin correspond à stock_bouteilles dans JSON 
     * @param {number} volume - volume de l'article au volume_littres dans le fichier JSON
     * 
     * si prix n'est pas fourni, l'article fait 12,50.
     * si quantité n'est pas fournie, par défaut elle fait 1.
     * si volume n'est pas fourni, l'article faut 75 cl par défaut
     */
    constructor(reference, nom, appellation, prix = 12.50, quantity = 1, volume = 0.75) {
        /*Vérification des types */
        if (typeof reference !== 'number') {
            throw new Error("La référence doit être un nombre.");
        }

        if (typeof nom !== 'string') {
            throw new Error("Le nom doit être une chaîne de caractères.");
        }

        if (typeof appellation !== 'string') {
            throw new Error("L'appellation doit être une chaîne de caractères.");
        }

        if (typeof prix !== 'number') {
            throw new Error("Le prix doit être un nombre.");
        }

        if (typeof quantity !== 'number') {
            throw new Error("La quantité doit être un nombre.");
        }

        if (typeof volume !== 'number') {
            throw new Error("Le volume doit être un nombre.");
        }

        //Vérification des valeurs vides
        if(isNaN(reference)) {
            throw new Error("La référence ne peut être NaN.")
        }

        if(!nom || nom.trim() === "") {
            throw new Error("Le nom ne peut être vide.")
        }

        if(!appellation || appellation.trim() === "") {
            throw new Error("L'appelation ne peut être vide.")
        }

        if(isNaN(prix)) {
            throw new Error("Le prix ne peut être NaN.")
        }

        if(isNaN(quantity)) {
            throw new Error("La quantité ne peut être NaN.")
        }

        if(isNaN(volume)) {
            throw new Error("Le volume ne peut être NaN.")
        }

        /* Correspond à id_article dans JSON */
        /** @type {number} */
        this.reference = reference;
        /** @type {string} */
        this.nom = nom;
        /** @type {string} */
        this.appellation = appellation;
        /* Correspond à prix_euros dans JSON */
        /** @type {number} */
        this.prix = prix;
        /* Correspond à stock_bouteilles dans JSON */
        /** @type {number}  */
        this.quantity = 0;
        /* Correspond au volume_littres */
        /** @type {number} */
        this.volume = 0.75;
    
    }

    /* LES GETTERS */
    get reference() {
        return this.#reference;
    }

    get nom() {
        return this.#nom
    }

    get appellation() {
        return this.#appellation;
    }

    get prix() {
        return this.#prix;
    }

    get quantity() {
        return this.#quantity;
    }

    get volume() {
        return this.#volume;
    }

    /* LES SETTERS */
    set prix(prix) {
        if (typeof prix !== 'number') {
            throw new Error("le prix de l'article doit être un entier");
        }
        this.prix = prix;
    }

    set quantity(quantity) {
        if (typeof quantity !== 'number') {
            throw new Error("la quantité de l'article doit être un entier");
        }
        this.quantity = quantity;
    }

    set volume(volume) {
        if (typeof volume !== 'number') {
            throw new Error("le volume de l'article doit être un entier");
        }
        this.volume = volume;
    }



    greet() {
        return `Article référence ${this.reference} - Nom ${this.nom} - Appellation :  ${this.appellation} - Prix : ${this.prix}`;
    }
}