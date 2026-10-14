// Définition de la classe et exportation
export default class Category {
    /* Les paramètres */
    #id;
    #name;

    /**
     * Constructeurs de classe Category
     * @param {number} id 
     * @param {string} name 
     */
    constructor(id, name) {
        /*Vérification des types */
        if (typeof id !== 'number') {
            throw new Error("id doit être un nombre.");
        }

        if (typeof name !== 'string') {
            throw new Error("name doit être une chaîne de caractères.");
        }

        //Vérification des valeurs vides
        if(isNaN(id)) {
            throw new Error("L'id ne peut être NaN.")
        }

        if(!name || name.trim() === "") {
            throw new Error("Le name ne peut être vide.")
        }
        this.id = id;
        this.name = name;
    }

    toString() {
        return `${this.name} ${this.id}`;
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }
}