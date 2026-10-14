// Importation de la classe Article
import Article from './Article.js';
import Category from './Category.js';
/*
try {
    const article = new Article("REF123", "Vin rouge brillant", "Bordeaux", 15.99);
    console.log(article.greet());
} catch (error) {
    console.error("Erreur :", error.message);
}*/

async function loadJsonData(file) {

    try{
        //response représente la réponse du serveur. Elle contient notamment le contenu de ton fichier JSON.
        //Mais ce contenu n'est pas encore directement utilisable comme objet JavaScript.
        const response = await fetch(file);

        // Vérifie si le statut HTTP est entre 200 et 299 (succès)
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        //Attends que le JSON soit récupéré et transformé (await), puis stocke le résultat dans une constante appelée cv
        const jsonResponse = await response.json();
        console.log("La requête du " + file + " a réussie")

        return jsonResponse;
    } catch (erreur) {
        console.error("Echec du chargement: ", erreur);
        return null;
    }
}

async function main() {

    console.log("Lancement du programme");

    const stockJson = "data/wine_stock.json"
    const stock = await loadJsonData(stockJson);

    console.log(stock);

    
    //On récupère uniquement la liste des noms et ids des catégories pour construire le menu des catégories
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
        //On l'ajoute à la liste
        listeCategories.push(category);

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
    });
    
    //A l'initialisation on récupère tous les articles quelque soit la catégorie
    let articles = recupererTousLesArticles(stock);
    //On va récupérer le contenant dans lequel on souhaite écrire    
    let lstAarticles = document.getElementById("lst-articles");
    lstAarticles.innerHTML = "";
    //On va envoyer le contenu pour la partie articles
    articles.forEach(function(article) {
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
                            <button class="btn btn-outline-secondary" type="button">-</button>
                            <input type="number" class="form-control text-center" value="1" min="1">
                            <button class="btn btn-outline-secondary" type="button">+</button>
                        </div>
                        <button type="button" class="btn btn-primary btn-sm btn-custom flex-grow-1">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    console.log("Fin du programme");
}


function recupererTousLesArticles(stock) {

    let tousLesArticles = [];

    stock.categories.forEach(function(categorie) {

        //On parcourt les articles de cette catégorie
        categorie.articles.forEach(item => {
            let article = new Article(
                    item.id_article,
                    item.nom,
                    item.appellation,
                    item.prix_euros
                );

            tousLesArticles.push(article);
        });

    });

    return tousLesArticles;
}

main();
