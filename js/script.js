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
    let allArticles = recupererTousLesArticles(stock);
    
    //On affiche les articles
    afficherArticles(allArticles);

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
        afficherArticles(articlesAAfficher);

        //On affiche la boutique
        afficherBoutique();
    });

    //On ajoute le listener sur le bouton "Panier" qui affiche le panier
    let boutonPanier = document.getElementById("bouton-panier");
    boutonPanier.addEventListener("click", function(event) {
        //On affiche le panier
        afficherPanier();
    });


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

//Fonction qui affiche le panier (et masque la liste des articles)
function afficherPanier() {
    let lstArticles = document.getElementById("lst-articles");
    let panier = document.getElementById("panier");
    lstArticles.classList.add("d-none");
    panier.classList.remove("d-none");
}

//Fonction qui affiche la boutique (et masque le panier)
function afficherBoutique() {
    let lstArticles = document.getElementById("lst-articles");
    let panier = document.getElementById("panier");
    panier.classList.add("d-none");
    lstArticles.classList.remove("d-none");
}

main();
