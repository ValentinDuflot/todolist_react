/**author: Valentin DUFLOT
 * FONCTION AFFICHEURPOST
 * est utilisé pour afficher un post-it unique : 
 * son contenu, un bouton pour activer la modification,
 * le cas échéant, le formulaire de modification
 * NB: le bouton de suppression est géré dans la fonction ListePost
 */

// imports nécessaires
import React , {useState} from 'react';


export default function AfficheurPost(props){
  
    // la cible est l'instance de classe Post que cette afficheur affiche
    let cible = props.cible;

    // variables d'état. 
    const [nom, setNom] = useState(props.nom);
    const [contenu, setContenu] = useState(props.contenu);
    const [dateLimite, setDateLimite] = useState(props.dateLimite);
    const [couleur, setCouleur] = useState(props.couleur);
    const [etat,setEtat] = useState(cible.modification); // affichage du post si false, modification si true
  
    // switch cible.modification entre true et false, donc entre affichage et modification
    const handleClick = event => {
      if(etat === false){
        cible.modification = true;
        setEtat(true);
  
      }
      else{
        cible.modification = false;
        setEtat(false);
      }
    };
  
    // self-explanatory...
    return(
      <div style={{backgroundColor:couleur}}  >
        {/* Affichage du post-it, si cible.modification est à false, avec bouton de modification */}
        {cible.modification === false && (<>
        <h3 className="card-title">{nom}</h3>
        <p className="card-text">{contenu}</p>
        <p className="card-text">Date limite : {dateLimite}</p>
        
        <button className="btn  btn-primary w-100" onClick ={(handleClick)}> modifier </button>
        </>)}
  
        {/* Affichage du formulaire de moficiation du post-it */}
        {cible.modification && 
        (<>
        <form onSubmit ={(handleClick)}>
        <label>
          Modification du post-it
        </label>
  
        <input
          type="text"
          name="titre"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        ></input>
        <br />
  
        <input
          type="text"
          name="contenu"
          value={contenu}
          onChange={(event) => setContenu(event.target.value)}
        ></input>
        <br />
  
        <input
          type="datetime-local"
          name="dateLimite"
          value={dateLimite}
          onChange={(event) => setDateLimite(event.target.value)}
        ></input>
        <br />
  
        <input
          type="color"
          name="couleur"
          value={couleur}
          onChange={(event) => setCouleur(event.target.value)}
        ></input>
        {/* Bouton de validation de la modification */}
        <input  className="btn btn-primary w-100" type="submit" onClick ={(handleClick)}/>
        
      </form>
        </>)
        }
      </div>
      )
    
  }