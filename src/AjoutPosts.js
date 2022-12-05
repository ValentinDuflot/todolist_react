/** Author: Valentin DUFLOT
 * FONCTION AJOUTPOST
 * crée et gère la visibilité et le fonctionnement du 
 * formulaire d'ajout de post-it à la liste
 */

// imports nécessaires
import React, { useState } from 'react';
import { fonctionAjout } from './ListePosts'


export default function AjoutPosts() {
    // permet de switch la visibilité du formulaire
    let [ajoutToggle, toggleAjout] = useState(false);

    // variables d'état
    let [titre, setTitre] = useState("Titre");
    let [contenu, setContenu] = useState("Contenu");
    let [dateLimite, setDateLimite] = useState("2022-06-12T19:30");
    let [couleur, setCouleur] = useState("#f6b73c");

    // fonction d'ajout de post, invoquée lors de l'envoi du formulaire
    const ajoutPost = () => {
        toggleAjout(false);
        fonctionAjout(titre, contenu, dateLimite, couleur);
    }

    // self-explanatory
    return (
        <div className="container-fluid">
            {/* bouton de switch de visibilité du formulaire */}
            <button className="btn btn-primary" onClick={() => toggleAjout(true)}> Ajouter un element</button>

            {/* affichage du formulaire d'ajout uniquement si ajoutToggle est true */}
            {ajoutToggle &&
                (
                    <form onSubmit={e => { e.preventDefault(); ajoutPost(); }}>
                        <input
                            type="text"
                            name="titre"
                            value={titre}
                            onChange={(event) => setTitre(event.target.value)}
                        ></input>

                        <input
                            type="text"
                            name="contenu"
                            value={contenu}
                            onChange={(event) => setContenu(event.target.value)}
                        ></input>

                        <input
                            type="datetime-local"
                            name="dateLimite"
                            value={dateLimite}
                            onChange={(event) => setDateLimite(event.target.value)}
                        ></input>

                        <input
                            type="color"
                            name="couleur"
                            value={couleur}
                            onChange={(event) => setCouleur(event.target.value)}
                        ></input>

                        <input type="submit" />
                    </form>
                )
            }
        </div>
    );
}