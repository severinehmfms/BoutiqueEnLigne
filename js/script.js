// Importation des classes
import Article from './Article.js';
import Category from './Category.js';

//Importation du fichier de fonctions et du fichier comportant les listeners
import * as fonctions from "./fonctions.js";
import "./listeners.js";

async function main() {

    console.log("Lancement du programme");

    const stockJson = "data/wine_stock.json"
    const stock = await fonctions.loadJsonData(stockJson);

    console.log(stock);

    //On affiche les catégories
    let menuCategories = document.getElementById("menusCategories");
    fonctions.showCategories(stock, menuCategories);
        
    //A l'initialisation on récupère tous les articles quelque soit la catégorie
    let allArticles = fonctions.recupererTousLesArticles(stock);
    
    //On affiche tous les articles
    fonctions.afficherArticles(allArticles);

    //On ajoute le listener au menu des catégories qui va actualiser la liste des articles affichés
    menuCategories.addEventListener("click", function(event) {
        // On vérifie si le clic concerne un bouton de catégorie
        let bouton = event.target.closest(".category-btn");

        // Si le clic ne concerne pas un bouton, on arrête
        if (bouton === null) {
            return;
        }

        // On récupère l'identifiant de la catégorie cliquée
        let idCategorie = bouton.dataset.category;
        //console.log(idCategorie);

        let articlesAAfficher;

        //Si on a choisi l'affichage de tous les articles on utilise la liste existante
        if (idCategorie === "tous") {
            articlesAAfficher = allArticles;
        } else {
            //On filtre la liste de tous les articles pour ne récupérer que ceux qui ont pour idCategorie celle du bouton
            articlesAAfficher = allArticles.filter(function(article) {
                return String(article.idCategorie) === idCategorie;
            });
        }

        //On affiche les articles
        fonctions.afficherArticles(articlesAAfficher);

        //On affiche la boutique
        fonctions.afficherBoutique();
    });

    //On ajoute le listener sur le bouton "Panier" qui affiche le panier
    let boutonPanier = document.getElementById("bouton-panier");
    boutonPanier.addEventListener("click", function(event) {
        //On affiche le panier
        fonctions.afficherPagePanier();
    });


    console.log("Fin du programme");
}


main();
