// Importation des classes
import Article from './Article.js';
import Category from './Category.js';
import Cart from './Cart.js';

//Importation du fichier de fonctions et du fichier comportant les listeners
import * as fonctions from "./fonctions.js";
//On importe individuellement les fonctions appelées directement par le html
import { removeQuantityPageShop } from "./fonctions.js";
import { addQuantityPageShop } from "./fonctions.js";
//On importe les listeners
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

    //OA l'initialisation on construit le panier
    //let idcart = 1001; //TODO Est ce obligatoire d'avoir un id? 
    let cartEnCours = new Cart();    
    
    console.log("Fin du programme");
}

main();
