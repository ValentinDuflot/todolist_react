/** author: Valentin DUFLOT
 * CLASSE POST: 
 * les objets d'instance de la classe Post
 * stockent les informations de chaque tâche
 * de la liste des tâches. 
 * POST est utilisé en substitution de "post-it", moins clair.
 */

export default class Post {
    constructor(nom, contenu, dateLimite, couleur) {
        this.nom = nom;
        this.contenu = contenu;
        this.dateLimite = dateLimite;
        this.couleur = couleur;
        this.id = crypto.randomUUID(); // pour les clés uniques dans les map. 
        this.modification = false; // à true lorsque l'utilisateur souhaite modifier le contenu du post courant.
    }
}