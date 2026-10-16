// Importation des classes
import Article from './Article.js';
import Category from './Category.js';
import Cart from './Cart.js';
//Importation des listeners directement liés aux articles affichés
import { installListenerShopQty } from "./listeners.js";
import { installListenerAddToCart } from "./listeners.js";

export async function loadJsonData(file) {
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

//Fonction qui récupère un tableau avec tous les articles
export function getAllArticles(stock) {
    let allArticles = [];
    //Pour chaque catégorie
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

            allArticles.push(article);
        });

    });

    return allArticles;
}

//Fonction qui récupère les catégories dans les données retournées du JSON puis les affiche à l'écran
export function showCategories(stock, menuCategories){
    //On va construire le menu des catégories
    let listeCategories = [];
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
}

export function showArticles(articlesToShow, cartEnCours){
    //On va récupérer le contenant dans lequel on souhaite écrire    
    let lstAarticles = document.getElementById("lst-articles");

    //On efface les données actuellement présentes
    lstAarticles.innerHTML = "";

    //On va envoyer le contenu pour la partie articles
    articlesToShow.forEach(function(article) {

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
                            <button class="btn btn-outline-secondary" type="button" data-action="remove" data-id-article="${article.reference}">-</button>
                            <input type="number" class="form-control text-center" value="1" min="1" id="input-shop-qty-${article.reference}">
                            <button class="btn btn-outline-secondary" type="button" data-action="add" data-id-article="${article.reference}">+</button>
                        </div>
                        <button type="button" class="btn btn-primary btn-sm btn-custom flex-grow-1" data-action="add-to-cart" data-id-article="${article.reference}">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    //On installe les listeners liés aux articles ici pour les remettre à jour à chaque affichage
    installListenerShopQty();
    installListenerAddToCart(articlesToShow, cartEnCours);
}

export function showCart(cartEnCours){
    //On va récupérer le contenant dans lequel on souhaite écrire    
    let divpanier = document.getElementById("panier");

    //On efface les données actuellement présentes
    divpanier.innerHTML = "";

    if(cartEnCours instanceof Cart){
        console.log(cartEnCours);
        console.log(`${cartEnCours} est un bien un objet Cart - On va afficher le panier`);
        // Articles : ${cartEnCours.allProductToString()} <br/>
        divpanier.innerHTML += `Date : ${cartEnCours.creationDate.toLocaleDateString()} <br/> 
        <div class="card mb-3 border-0 shadow-sm" id="lst-articles-panier">                      
        `;
        
        if (cartEnCours.listOfProducts !== undefined) {
            console.log("Liste des produits : " + cartEnCours.listOfProducts);
            console.log("Produit en première position : " + cartEnCours.listOfProducts[0]);

            cartEnCours.listOfProducts.forEach(function(product) {
                divpanier.innerHTML += `
                    <div class="card-body">
                        <div class="row align-items-center g-3">

                            <!-- Informations sur le vin -->
                            <div class="col-12 col-sm">
                                <h6 class="fw-bold mb-1 text-vin">
                                    ${product.idArticle} - ${product.nom} 
                                </h6>
                                <p class="text-secondary small mb-2">
                                    ${product.appellation} 
                                </p>
                                <p class="mb-0 fw-semibold">
                                    ${product.prix}  € / bouteille
                                </p>
                            </div>

                            <!-- Quantité -->
                            <div class="col-7 col-sm-4">
                                <div class="input-group input-group-sm">
                                    <button class="btn btn-outline-secondary" type="button">−</button>
                                    ${product.quantity}
                                    <button class="btn btn-outline-secondary" type="button">+</button>
                                </div>
                            </div>

                            <!-- Sous-total et suppression -->
                            <div class="col-5 col-sm-auto text-end">
                                <p class="fw-bold mb-2 text-vin">
                                    25,80 €
                                </p>
                                <button class="btn btn-sm btn-outline-danger" type="button"><i class="bi bi-trash"></i> Supprimer</button>
                            </div>

                        </div>
                    </div>
                `;

            });
        }

        divpanier.innerHTML += `
            </div>
            <div class="d-flex justify-content-between mb-3">
                <span>Total</span>
                <!-- TODO Zone à mettre à jour-->
                <strong id="total-panier">${cartEnCours.calculateTotalItems()} €</strong>
            </div>

            <button type="button" class="btn btn-commande w-100"> Passer la commande </button>
            `;


    } else {
        console.error(`${cartEnCours} n'est pas un objet Cart`);
    }

    //TODO Il faudra lancer l'installation des listeners spécifiques du panier ici (voir comme fonction précédente)


}

//Fonction qui affiche le div du panier (et masque la liste des articles)
export function showPageCart() {
    let lstArticles = document.getElementById("lst-articles");
    let panier = document.getElementById("panier");
    lstArticles.classList.add("d-none");
    panier.classList.remove("d-none");
}

//Fonction qui affiche la boutique (et masque le panier)
export function showShop() {
    let lstArticles = document.getElementById("lst-articles");
    let panier = document.getElementById("panier");
    panier.classList.add("d-none");
    lstArticles.classList.remove("d-none");
}

//Fonction qui ajoute 1 à la quantité pour la référence - Page boutique (appelée au clic sur + dans la boutique pour un article)
export function addQuantityPageShop(reference) {
    const input = document.getElementById("input-shop-qty-" + reference);

    input.value = parseInt(input.value) + 1;
}

//Fonction qui enlève 1 à la quantité pour la référence - Page boutique (appelée au clic sur + dans la boutique pour un article)
export function removeQuantityPageShop(reference) {
    const input = document.getElementById("input-shop-qty-" + reference);

    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

//Fonction qui ajoute un article au panier
export function addToCart(article, qty, cartEnCours){
    console.log("On va ajouter l'article " + article.reference + " au panier. \nQuantité : " + qty);
    if(cartEnCours instanceof Cart){
        console.log(`${cartEnCours} est un bien un objet Cart`);
        cartEnCours.increaseQuantity(article, qty);
        console.log(`Affichage du panier:  ${cartEnCours}`);
        console.log(`Affichage du prix du panier: ${cartEnCours.calculateTotalItems()} Euros`);
    } else {
        console.error(`${cartEnCours} n'est pas un objet Cart`);
    }
}

//Fonction qui ajoute un article au panier
export function delToCart(article, qty, cartEnCours){
    console.log("On va enlever l'article " + article.reference + " au panier. \nQuantité : " + qty);
    if(cartEnCours instanceof Cart){
        console.log(`${cartEnCours} est un bien un objet Cart`);
        cartEnCours.decreaseQuantity(article, qty);
        console.log(`Affichage du panier:  ${cartEnCours}`);
        console.log(`Affichage du prix du panier: ${cartEnCours.calculateTotalItems()} Euros`);
    } else {
        console.error(`${cartEnCours} n'est pas un objet Cart`);
    }
}