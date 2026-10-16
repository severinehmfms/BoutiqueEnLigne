import * as fonctions from "./fonctions.js";

//Installation des listeners sur le menu des catégories
export function installListenerMenuCategories(menuCategories, allArticles, cartEnCours) {
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
        fonctions.showArticles(articlesAAfficher, cartEnCours);

        //On affiche la boutique
        fonctions.showShop();
    });
}

//Installation du listener sur le bouton Panier qui affiche le panier
export function installListenerButtonCart(cartEnCours){
    //On ajoute le listener sur le bouton "Panier" qui affiche le panier
    let boutonPanier = document.getElementById("bouton-panier");
    boutonPanier.addEventListener("click", function(event) {
        //On remplit les informations du panier
        fonctions.showCart(cartEnCours);
        //On affiche le panier
        fonctions.showPageCart();
    });
}

//Installation des listeners sur les boutons + et - de l'affichage des articles
export function installListenerShopQty() {
    //On récupère les boutons sur la page qui ont pour data-action add ou remove (attention pour quand il y aura le panier il faudra utiliser add-cart, remove-cart etc...)
    const boutons = document.querySelectorAll('[data-action="add"], [data-action="remove"]');

    //Pour chacun des boutons on va ajouter un listener
    boutons.forEach(function(bouton) {

        bouton.addEventListener("click", function() {
            //On récupère la référence de l'article concerné
            const reference = this.dataset.idArticle;   //Permet de récupérer : data-id-article="${article.reference}"
            //console.log(reference);

            //On récupère le champ input qui correspond à cette référence
            const input = document.getElementById('input-shop-qty-'+reference);

            //On récupère la quantité actuelle dans ce champ
            let quantite = parseInt(input.value);

            //On met à jour la quantité
            if (bouton.dataset.action === "add") {
                quantite++;
            }

            if (bouton.dataset.action === "remove" && quantite > 1) {
                quantite--;
            }

            //On met à jour le champ input avec la nouvelle valeur 
            input.value = quantite;
        });
    });

}

//On ajoute un listener sur les boutons ajouter au panier de la page des articles
export function installListenerAddToCart(articlesPageCourante, cartEnCours){  //
    const boutons = document.querySelectorAll('[data-action="add-to-cart"]');

    boutons.forEach(function(bouton) {
        bouton.addEventListener("click", function(event) {
            const reference = event.currentTarget.dataset.idArticle; 
            const inputQty = document.getElementById("input-shop-qty-" + reference);
            const qty = parseInt(inputQty.value);

            console.log(articlesPageCourante);

            //On récupère l'objet article correspondant à la référence
            const article = articlesPageCourante.find(function(article) {
                return article.reference == reference;
            });

            fonctions.addToCart(article, qty, cartEnCours);
        });
    });
}

//On ajoute un listener sur les boutons ajouter et retirer du panier quand il est affiché
export function installListenerDelToCart(articlesPageCourante, cartEnCours){  //
    const boutonAdd = document.getElementById('add-cart');
    const boutonDel = document.getElementById('del-cart');
    const productQuantity = document.getElementById("product-quantity").textContent;

    boutonAdd.addEventListener("click", function(event) {
        const reference = event.currentTarget.dataset.idArticle;
        const inputQty = document.getElementById("input-shop-qty-" + reference);
        const qty = parseInt(inputQty.value);

        console.log(articlesPageCourante);

        //On récupère l'objet article correspondant à la référence
        const article = articlesPageCourante.find(function(article) {
            return article.reference == reference;
        });

        fonctions.addToCart(article, 1, cartEnCours);
    });

}