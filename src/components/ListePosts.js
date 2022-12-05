/** Author: Valentin DUFLOT
 * FONCTION LISTEPOSTS
 * Contient d'une part un array des instances de classe Post
 * d'autre part les instructions d'affichage
 * en complément des fonctions de création et délétion de post
 */

// imports nécessaires
import React, { useState } from 'react';
import Post from '../Post'
import AfficheurPost from './AfficheurPost'


// Création d'un array contenant des posts-types,
// afin que la page ne soit pas vide lors du premier chargement
let listePosts = []
listePosts.push(new Post("titre 1", "test contenu1testcontenu1test contenu1", "2022-06-12T19:30", "#f6b73c"))
listePosts.push(new Post("titre 2", "test contenu2testcontenu2test contenu2", "2022-06-12T19:30", "#f6b73c"))
listePosts.push(new Post("titre 3", "test contenu3testcontenu3test contenu3", "2022-06-12T19:30", "#f6b73c"))

// référence à la fonction d'ajout de post, 
// puisqu'elle doit être utilisable hors de la fonction
export let fonctionAjout;


export default function ListePosts() {

    // array d'instances de post, initialement remplie avec les posts-types instanciés plus haut
    let [liste, setListe] = useState(listePosts);

    // ajout de post
    const newPost = (nom, contenu, dateLimite, couleur) => {
        const newListe = liste.concat(new Post(nom, contenu, dateLimite, couleur));
        setListe(newListe);
    }

    // enregistrement de la fonction d'ajout de post
    fonctionAjout = newPost;

    // délétion de post
    const deletePost = (element) => {
        liste = liste.filter(function (value, index, arr) {
            return value.id !== element.id;
        })
        setListe(liste)
    }

    // self-explanatory
    return (
        <div className="container-fluid" >
            <div className="row">
                {/* Pour chaque post dans la liste d'instances : */}
                {liste.map(element => (
                    <div key={element.id} className="m-1 p-2 col-sm-3 text-center bg-secondary border border-dark rounded">
                        {/* Affichage du post-it */}
                        <AfficheurPost nom={element.nom} contenu={element.contenu} dateLimite={element.dateLimite} couleur={element.couleur} cible={element} />
                        {/* Bouton de suppression du post */}
                        <button style={{ backgroundColor: "red" }} className="btn w-100" onClick={() => deletePost(element)}> supprimer</button>
                    </div>
                ))}
            </div>
        </div>

    );
}