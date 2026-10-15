// Importation des classes
import Article from './Article.js';
import Category from './Category.js';

//Importation du fichier de fonctions et du fichier comportant les listeners
import * as fonctions from "./fonctions.js";
import { installListenerMenuCategories } from "./listeners.js";
import { installListenerButtonCart } from "./listeners.js";

async function main() {

    console.log("Lancement du programme");

    //On récupère les données du fichier JSON
    const stockJson = "data/wine_stock.json"
    const stock = await fonctions.loadJsonData(stockJson);

    console.log(stock);

    //On affiche les catégories
    let menuCategories = document.getElementById("menusCategories");
    fonctions.showCategories(stock, menuCategories);
        
    //A l'initialisation on récupère tous les articles quelque soit la catégorie
    let allArticles = fonctions.getAllArticles(stock);
    
    //On affiche tous les articles
    fonctions.showArticles(allArticles);

    //On installe les listeners
    installListenerMenuCategories(menuCategories, allArticles);
    installListenerButtonCart();


    console.log("Fin du programme");
}


main();
