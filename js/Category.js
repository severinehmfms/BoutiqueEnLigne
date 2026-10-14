// Définition de la classe et exportation
export default class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toString() {
        return `${this.name} ${this.id}`;
    }
}