# Question GPT-6 Luna

Pouvez-vous me créer un jeu de données de stock de vins d'un caviste en imaginant qu'il puisse y avoir des vins de bordeaux (Saint-Émilion, Saint-Estèphe, margaux, dans les vins de bordeaux dans les 3 couleurs blanc, rouge et rosé, pareil pour du champagne, du Minervois, du vin de l'AOC Gaillac Tarn et de l'AOC Clairette de Diye, du vin Jaune du Jura de bogelais avec un stock de bouteilles pour entre 2 et 56 par référence, avec des volumes compris entre 1/5, 75 puis Margnum et Jéroboham ? 

Voici un exemple de données json bon avec de l'informatique : 
```json
{
  "categories": [
    {
      "id_categorie": 1,
      "nom_categorie": "Bordeaux",
      "articles": [
        {
          "id_article": 101,
          "titre": "Clavier mécanique",
          "prix": 129.50,
          "disponible": false,
          "tags": ["gaming", "ordinateur"]
        }
      ]
    },
    {
      "id_categorie": 2,
      "nom_categorie": "Livres",
      "articles": [
        {
          "id_article": 201,
          "titre": "Apprendre le JSON en douceur",
          "prix": 19.90,
          "disponible": true,
          "tags": ["programmation", "web"]
        }
      ]
    }
  ]
}
```

## Réponse GPT-6 Luna

Voici un jeu de données **fictif**, au format JSON. Les stocks sont compris entre 2 et 56 bouteilles par référence. J’ai interprété « 1/5 » comme **0,2 L** et « margnum » comme **magnum (1,5 L)**. Le Champagne rouge n’étant pas une catégorie habituelle, j’ai inclus du blanc et du rosé.

```json
{
  "categories": [
    {
      "id_categorie": 1,
      "nom_categorie": "Bordeaux",
      "articles": [
        {
          "id_article": 101,
          "nom": "Château des Cèdres",
          "appellation": "Saint-Émilion",
          "couleur": "rouge",
          "millesime": 2020,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 24.90,
          "stock_bouteilles": 18
        },
        {
          "id_article": 102,
          "nom": "Château Haute-Rive",
          "appellation": "Saint-Estèphe",
          "couleur": "rouge",
          "millesime": 2019,
          "volume_litres": 1.5,
          "format": "magnum",
          "prix_euros": 59.00,
          "stock_bouteilles": 6
        },
        {
          "id_article": 103,
          "nom": "Château des Amandiers",
          "appellation": "Margaux",
          "couleur": "rouge",
          "millesime": 2021,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 39.50,
          "stock_bouteilles": 12
        },
        {
          "id_article": 104,
          "nom": "Les Terrasses de Gironde",
          "appellation": "Bordeaux",
          "couleur": "blanc",
          "millesime": 2023,
          "volume_litres": 0.2,
          "format": "mignonette",
          "prix_euros": 5.90,
          "stock_bouteilles": 32
        },
        {
          "id_article": 105,
          "nom": "Rosé des Deux Rives",
          "appellation": "Bordeaux",
          "couleur": "rosé",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 9.80,
          "stock_bouteilles": 27
        }
      ]
    },
    {
      "id_categorie": 2,
      "nom_categorie": "Champagne",
      "articles": [
        {
          "id_article": 201,
          "nom": "Cuvée des Bulles",
          "appellation": "Champagne",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 32.00,
          "stock_bouteilles": 21
        },
        {
          "id_article": 202,
          "nom": "Rosé de la Montagne",
          "appellation": "Champagne",
          "couleur": "rosé",
          "millesime": null,
          "volume_litres": 1.5,
          "format": "magnum",
          "prix_euros": 72.00,
          "stock_bouteilles": 4
        },
        {
          "id_article": 203,
          "nom": "Brut des Vignes",
          "appellation": "Champagne",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 3.0,
          "format": "jéroboam",
          "prix_euros": 145.00,
          "stock_bouteilles": 2
        }
      ]
    },
    {
      "id_categorie": 3,
      "nom_categorie": "Minervois",
      "articles": [
        {
          "id_article": 301,
          "nom": "Les Garrigues du Minervois",
          "appellation": "Minervois",
          "couleur": "rouge",
          "millesime": 2022,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 12.50,
          "stock_bouteilles": 36
        },
        {
          "id_article": 302,
          "nom": "Rosé des Garrigues",
          "appellation": "Minervois",
          "couleur": "rosé",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 10.90,
          "stock_bouteilles": 15
        }
      ]
    },
    {
      "id_categorie": 4,
      "nom_categorie": "Gaillac",
      "articles": [
        {
          "id_article": 401,
          "nom": "Perle du Tarn",
          "appellation": "Gaillac",
          "couleur": "blanc",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 11.20,
          "stock_bouteilles": 24
        },
        {
          "id_article": 402,
          "nom": "Côtes Rouges de Gaillac",
          "appellation": "Gaillac",
          "couleur": "rouge",
          "millesime": 2021,
          "volume_litres": 1.5,
          "format": "magnum",
          "prix_euros": 28.00,
          "stock_bouteilles": 8
        }
      ]
    },
    {
      "id_categorie": 5,
      "nom_categorie": "Clairette de Die",
      "articles": [
        {
          "id_article": 501,
          "nom": "Clairette Douce des Coteaux",
          "appellation": "Clairette de Die",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 13.40,
          "stock_bouteilles": 19
        },
        {
          "id_article": 502,
          "nom": "Clairette de Die Tradition",
          "appellation": "Clairette de Die",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 0.2,
          "format": "mignonette",
          "prix_euros": 4.50,
          "stock_bouteilles": 42
        }
      ]
    },
    {
      "id_categorie": 6,
      "nom_categorie": "Vins du Jura",
      "articles": [
        {
          "id_article": 601,
          "nom": "Vin Jaune des Coteaux",
          "appellation": "Château-Chalon",
          "couleur": "blanc",
          "millesime": 2017,
          "volume_litres": 0.62,
          "format": "clavelin",
          "prix_euros": 49.00,
          "stock_bouteilles": 5
        }
      ]
    },
    {
      "id_categorie": 7,
      "nom_categorie": "Beaujolais",
      "articles": [
        {
          "id_article": 701,
          "nom": "Beaujolais des Pierres Dorées",
          "appellation": "Beaujolais",
          "couleur": "rouge",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 8.90,
          "stock_bouteilles": 56
        },
        {
          "id_article": 702,
          "nom": "Morgon Cuvée des Vieux Coteaux",
          "appellation": "Morgon",
          "couleur": "rouge",
          "millesime": 2022,
          "volume_litres": 3.0,
          "format": "jéroboam",
          "prix_euros": 68.00,
          "stock_bouteilles": 3
        }
      ]
    }
  ]
}
```

## Question à gpt 

Merci, super. Est il possible de modifier le jeu json précédent pour avoir en catégories vins rouge, vins blanc, vin rosé, vins à bulle et vin liquoreux , vins moelleux, vins jaunes ?

## Réponse de gpt 

Bien sûr. Voici une version réorganisée par **type de vin** plutôt que par région. J’ai conservé les références, les stocks et les formats du jeu précédent.

```json
{
  "categories": [
    {
      "id_categorie": 1,
      "nom_categorie": "Vins rouges",
      "articles": [
        {
          "id_article": 101,
          "nom": "Château des Cèdres",
          "appellation": "Saint-Émilion",
          "couleur": "rouge",
          "millesime": 2020,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 24.90,
          "stock_bouteilles": 18
        },
        {
          "id_article": 102,
          "nom": "Château Haute-Rive",
          "appellation": "Saint-Estèphe",
          "couleur": "rouge",
          "millesime": 2019,
          "volume_litres": 1.5,
          "format": "magnum",
          "prix_euros": 59.00,
          "stock_bouteilles": 6
        },
        {
          "id_article": 103,
          "nom": "Château des Amandiers",
          "appellation": "Margaux",
          "couleur": "rouge",
          "millesime": 2021,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 39.50,
          "stock_bouteilles": 12
        },
        {
          "id_article": 301,
          "nom": "Les Garrigues du Minervois",
          "appellation": "Minervois",
          "couleur": "rouge",
          "millesime": 2022,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 12.50,
          "stock_bouteilles": 36
        },
        {
          "id_article": 402,
          "nom": "Côtes Rouges de Gaillac",
          "appellation": "Gaillac",
          "couleur": "rouge",
          "millesime": 2021,
          "volume_litres": 1.5,
          "format": "magnum",
          "prix_euros": 28.00,
          "stock_bouteilles": 8
        },
        {
          "id_article": 701,
          "nom": "Beaujolais des Pierres Dorées",
          "appellation": "Beaujolais",
          "couleur": "rouge",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 8.90,
          "stock_bouteilles": 56
        },
        {
          "id_article": 702,
          "nom": "Morgon Cuvée des Vieux Coteaux",
          "appellation": "Morgon",
          "couleur": "rouge",
          "millesime": 2022,
          "volume_litres": 3.0,
          "format": "jéroboam",
          "prix_euros": 68.00,
          "stock_bouteilles": 3
        }
      ]
    },
    {
      "id_categorie": 2,
      "nom_categorie": "Vins blancs",
      "articles": [
        {
          "id_article": 104,
          "nom": "Les Terrasses de Gironde",
          "appellation": "Bordeaux",
          "couleur": "blanc",
          "millesime": 2023,
          "volume_litres": 0.2,
          "format": "mignonette",
          "prix_euros": 5.90,
          "stock_bouteilles": 32
        },
        {
          "id_article": 401,
          "nom": "Perle du Tarn",
          "appellation": "Gaillac",
          "couleur": "blanc",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 11.20,
          "stock_bouteilles": 24
        }
      ]
    },
    {
      "id_categorie": 3,
      "nom_categorie": "Vins rosés",
      "articles": [
        {
          "id_article": 105,
          "nom": "Rosé des Deux Rives",
          "appellation": "Bordeaux",
          "couleur": "rosé",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 9.80,
          "stock_bouteilles": 27
        },
        {
          "id_article": 302,
          "nom": "Rosé des Garrigues",
          "appellation": "Minervois",
          "couleur": "rosé",
          "millesime": 2023,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 10.90,
          "stock_bouteilles": 15
        }
      ]
    },
    {
      "id_categorie": 4,
      "nom_categorie": "Vins à bulles",
      "articles": [
        {
          "id_article": 201,
          "nom": "Cuvée des Bulles",
          "appellation": "Champagne",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 32.00,
          "stock_bouteilles": 21
        },
        {
          "id_article": 202,
          "nom": "Rosé de la Montagne",
          "appellation": "Champagne",
          "couleur": "rosé",
          "millesime": null,
          "volume_litres": 1.5,
          "format": "magnum",
          "prix_euros": 72.00,
          "stock_bouteilles": 4
        },
        {
          "id_article": 203,
          "nom": "Brut des Vignes",
          "appellation": "Champagne",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 3.0,
          "format": "jéroboam",
          "prix_euros": 145.00,
          "stock_bouteilles": 2
        },
        {
          "id_article": 501,
          "nom": "Clairette Douce des Coteaux",
          "appellation": "Clairette de Die",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 0.75,
          "format": "bouteille",
          "prix_euros": 13.40,
          "stock_bouteilles": 19
        },
        {
          "id_article": 502,
          "nom": "Clairette de Die Tradition",
          "appellation": "Clairette de Die",
          "couleur": "blanc",
          "millesime": null,
          "volume_litres": 0.2,
          "format": "mignonette",
          "prix_euros": 4.50,
          "stock_bouteilles": 42
        }
      ]
    },
    {
      "id_categorie": 5,
      "nom_categorie": "Vins liquoreux",
      "articles": []
    },
    {
      "id_categorie": 6,
      "nom_categorie": "Vins moelleux",
      "articles": []
    },
    {
      "id_categorie": 7,
      "nom_categorie": "Vins jaunes",
      "articles": [
        {
          "id_article": 601,
          "nom": "Vin Jaune des Coteaux",
          "appellation": "Château-Chalon",
          "couleur": "jaune",
          "millesime": 2017,
          "volume_litres": 0.62,
          "format": "clavelin",
          "prix_euros": 49.00,
          "stock_bouteilles": 5
        }
      ]
    }
  ]
}
```

Les catégories « Vins liquoreux » et « Vins moelleux » sont vides, car le jeu précédent ne contenait pas de références correspondantes.
