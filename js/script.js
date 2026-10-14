// Importation de la classe Article
import Article from './Article.js';
import Category from './Category.js';
import { loadJsonData } from './fonctions.js';

async function main() {

    console.log("Lancement du programme");

    /* Chargement des données Json des articles du stock. */
    const stockJson = "data/wine_stock.json"
    const stock = await loadJsonData(stockJson);

    if (stock && Object.keys(stock).length > 0 ) {
        console.log("Succès, Les données Json du stock sont chargées");
        console.log(stock);
    } else {
        console.error("Attention, Les données du stock ne sont pas chargées");
    }

    /*
    try {
        const article = new Article("REF123", "Vin rouge brillant", "Bordeaux", 15.99);
        console.log(article.greet());
    } catch (error) {
        console.error("Erreur :", error.message);
    }
    */

    //On va construire le menu des catégories
    let listeCategories = [];
    let menuCategories = document.getElementById("menusCategories");
    menuCategories.innerHTML = "";
    menuCategories.innerHTML += `
        <li class="nav-item me-2">
            <button type="button"
                class="btn btn-outline-primary btn-custom category-btn active"
                data-category="tous">
                Tous les vins
            </button>
        </li>
    `;

    //On parcourt les catégories retournées du json 
    stock.categories.forEach(function(item) {

        //On crée l'objet catégorie
        let category = new Category(
            item.id_categorie,
            item.nom_categorie
        );
        console.log("création d'une variable locale category");

        //On crée le bouton dans le menu pour cette catégorie
        menuCategories.innerHTML += `
            <li class="nav-item me-2">
                <button type="button"
                    class="btn btn-outline-secondary btn-custom category-btn"
                    data-category="${category.id}">
                    ${category.name}
                </button>
            </li>
        `;

        console.log("Création des boutons catégories faites !");
    });
    
    //A l'initialisation on récupère tous les articles quelque soit la catégorie
    let allArticles = recupererTousLesArticles(stock);
    
    //On affiche les articles
    afficherArticles(allArticles);

    console.log("Fin du programme");
}

//Fonction qui récupère un tableau avec tous les articles
function recupererTousLesArticles(stock) {

    let tousLesArticles = [];

    stock.categories.forEach(function(categorie) {

        //On récupère tous les articles, avec l'id de la catégorie
        categorie.articles.forEach(item => {
            let article = new Article(
                    item.id_article,
                    item.nom,
                    item.appellation,
                    item.prix_euros,
                    categorie.id_categorie
                );

            tousLesArticles.push(article);
        });

    });

    console.log("Instantiation des articles terminée !");

    return tousLesArticles;
}

function afficherArticles(articlesToShow){
    //On va récupérer le contenant dans lequel on souhaite écrire    
    let lstAarticles = document.getElementById("lst-articles");
    //On efface les données actuellement présentes
    lstAarticles.innerHTML = "";
    //On va envoyer le contenu pour la partie articles
    articlesToShow.forEach(function(article) {
        //console.log(article.reference);
        //console.log(article.nom);
        //console.log(article.appellation);
        //console.log(article.prix);

        //On crée le bloc pour cet article
        lstAarticles.innerHTML += `
        <div class="col-12 col-sm-4 col-lg-2">
            <div class="card h-100 shadow-sm">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fs-6">${article.reference} - ${article.nom}</h5>
                    <p class="card-text text-muted small">Appellation : ${article.appellation}</p>
                    <p class="card-text text-muted small">Prix : ${article.prix}</p>
                    <div class="mt-auto">
                        <div class="input-group input-group-sm" style="width: 120px;">
                            <button class="btn btn-outline-secondary" type="button" data-id-article="${article.reference}">-</button>
                            <input type="number" class="form-control text-center" value="1" min="1" data-id-article="${article.reference}">
                            <button class="btn btn-outline-secondary" type="button" data-id-article="${article.reference}">+</button>
                        </div>
                        <button type="button" class="btn btn-primary btn-sm btn-custom flex-grow-1" data-id-article="${article.reference}">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

main();
