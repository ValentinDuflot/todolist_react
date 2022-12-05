import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';

class Post{

  constructor(nom,contenu,dateLimite,couleur) {
    this.nom = nom;
    this.contenu = contenu;
    this.dateLimite = dateLimite;
    this.couleur = couleur;
    this.id =  crypto.randomUUID();
    this.modification = false;
  }
}

function AfficheurPost(props){
  
  const [nom, setNom] = useState(props.nom);
  const [contenu, setContenu] = useState(props.contenu);
  const [dateLimite, setDateLimite] = useState(props.dateLimite);
  const [couleur, setCouleur] = useState(props.couleur);

  let cible = props.cible;
  
  const [etat,setEtat] = useState(cible.modification);

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

  
  return(
    <div>
      {cible.modification === false && (<>
      <h3 className="card-title">{nom}</h3>
      <p className="card-text">{contenu}</p>
      <p className="card-text">Date limite : {dateLimite}</p>
      
      <button style={{backgroundColor:couleur}} className="btn  w-100" onClick ={(handleClick)}> modifier </button>
      </>)}

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
      <input style={{backgroundColor:couleur}} className="btn w-100" type="submit" onClick ={(handleClick)}/>
      
    </form>
      </>)
      }
    </div>
    )
  
}

let listePosts = []
listePosts.push(new Post("titre 1","test contenu1testcontenu1test contenu1", "2022-06-12T19:30","#f6b73c"))
listePosts.push(new Post("titre 2","test contenu2testcontenu2test contenu2", "2022-06-12T19:30","#f6b73c"))
listePosts.push(new Post("titre 3","test contenu3testcontenu3test contenu3", "2022-06-12T19:30","#f6b73c"))

let fonctionAjout;

function ListePosts() {
  
  let[liste,setListe] = useState(listePosts);

  
  const newPost = (nom,contenu,dateLimite,couleur)=> {
    
    const newListe = liste.concat(new Post(nom,contenu,dateLimite,couleur));
    setListe(newListe);
  }
  fonctionAjout = newPost;

  const deletePost = (element) => {
    liste = liste.filter(function(value,index,arr){
      return value.id!==element.id;
    })   

    setListe(liste)
  }
/*
  const deleteAllPosts = () => {
    liste = [];
  }
*/
  return (
    <div className="container-fluid" > 
      <div className="row">
        {liste.map(element => (
          <div key={element.id} className="m-1 p-2 col-sm-3 text-center bg-secondary border border-dark rounded">
            <AfficheurPost  nom={element.nom} contenu={element.contenu} dateLimite={element.dateLimite} couleur={element.couleur} cible={element} />
            <button style={{backgroundColor:"red"}}className="btn w-100" onClick={() => deletePost(element)}> supprimer</button>
          </div>
        ))}
        </div>
    </div>

  );
}

 
function AjoutPosts(){
  let[ajoutToggle,toggleAjout] = useState(false);

  let[titre,setTitre] = useState("Titre");
  let[contenu,setContenu] = useState("Contenu");
  let[dateLimite,setDateLimite] = useState("2022-06-12T19:30");
  let[couleur,setCouleur] = useState("#f6b73c");

  const ajoutPost = () => {
    toggleAjout(false);
    fonctionAjout(titre,contenu,dateLimite,couleur);
  }
  return (
    <div className="container-fluid">
      <button className="btn btn-primary" onClick={() => toggleAjout(true)}> Ajouter un element</button>
      {ajoutToggle && 
      (
        <form onSubmit={e => { e.preventDefault();ajoutPost(); }}>
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
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <AjoutPosts/>
  <ListePosts/>
  </>
);
