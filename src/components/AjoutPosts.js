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

    // pour obtenir la date et heure actuelle
    let today = new Date();
    
    // on cherche à obtenir la date et l'heure actuelle
    let dateTime = today.getFullYear()+"-"; 
    // correction du mois : nécessite un affichage à deux chiffres même pour les mois avant octobre (10e mois...)
    today.getMonth()+1>=10 ? 
        dateTime += today.getMonth()+1 :
        dateTime += '0'+(today.getMonth()+1)
    dateTime += "-";
    // correction du jour
    today.getDate()>=10 ? 
        dateTime += today.getDate() :
        dateTime += '0'+(today.getDate())

    dateTime += "T";
    
    // correction de l'heure
    today.getHours()>=10 ? 
        dateTime += today.getHours() :
        dateTime += '0'+(today.getHours())
    dateTime += ":";
    // correction de la minute
    today.getMinutes()>=10 ? 
        dateTime += today.getMinutes() :
        dateTime += '0'+(today.getMinutes())


    // variables d'état
    let [titre, setTitre] = useState("Titre");
    let [contenu, setContenu] = useState("Contenu");
    let [dateLimite, setDateLimite] = useState(dateTime); // intilisé à la date/heure actuelle. A PRIORI FONCTIONNEL, NON TESTE
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