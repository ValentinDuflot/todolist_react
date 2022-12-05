/** Author: Valentin DUFLOT
 * FONCTION LISTEPOSTS
 * Contient d'une part un array des instances de classe Post
 * d'autre part les instructions d'affichage
 * en complément des fonctions de création et délétion de post
 */

// imports nécessaires
import React, { useState } from 'react';
import Post from '../classes/Post'
import AfficheurPost from './AfficheurPost'


// Création d'un array contenant des posts-types,
// afin que la page ne soit pas vide lors du premier chargement
let listePosts = []
listePosts.push(new Post("titre 1", "Irure esse culpa ullamco enim ad consequat Lorem magna occaecat Lorem ex fugiat fugiat nisi.", "2022-06-12T19:30", "#f6b73c"))
listePosts.push(new Post("titre 2", "Sit tempor tempor id qui consectetur exercitation occaecat est nostrud.", "2022-06-12T19:30", "#f6b73c"))
listePosts.push(new Post("titre 3", "Et ex officia labore occaecat mollit ex anim minim.", "2022-06-12T19:30", "#f6b73c"))


// référence à la fonction d'ajout de post, 
// puisqu'elle doit être utilisable hors de la fonction
export let fonctionAjout;


export default function ListePosts() {

    // array d'instances de post, initialement remplie avec les posts-types instanciés plus haut
    let [liste, setListe] = useState(listePosts);

    // variable d'état de nombre de posts
    let [nombre, setNombre] = useState(liste.length);

    // ajout de post
    const newPost = (nom, contenu, dateLimite, couleur) => {
        const newListe = liste.concat(new Post(nom, contenu, dateLimite, couleur));
        setListe(newListe);
        setNombre(newListe.length)
    }

    // enregistrement de la fonction d'ajout de post
    fonctionAjout = newPost;

    // délétion de post
    const deletePost = (element) => {
        liste = liste.filter(function (value, index, arr) {
            return value.id !== element.id;
        })
        setListe(liste)
        setNombre(liste.length)
    }
    

    // self-explanatory
    return (
        <div className="row justify-content-center ">
            <p>{nombre} tâches restantes</p>
            
            {/* Pour chaque post dans la liste d'instances : */}
            {liste.map(element => (
                <div key={element.id} className="m-1 p-2 col-sm-3 bg-secondary border border-dark rounded">
                    {/* Affichage du post-it */}
                    <AfficheurPost nom={element.nom} contenu={element.contenu} dateLimite={element.dateLimite} couleur={element.couleur} cible={element} />
                    {/* Bouton de suppression du post */}
                    <button style={{ backgroundColor: "red" }} className="btn w-100" onClick={() => deletePost(element)}> supprimer</button>
                </div>
            ))}
        </div>

    );
}