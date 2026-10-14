// Importation de la classe Article
import Article from './Article.js';

try {
    const article = new Article("REF123", "Vin rouge brillant", "Bordeaux", 15.99);
    console.log(article.greet());
} catch (error) {
    console.error("Erreur :", error.message);
}

