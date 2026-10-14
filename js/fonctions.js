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