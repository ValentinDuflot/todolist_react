/** Author: Valentin DUFLOT
 * index de la todolist
 * la logique de l'application est contenue
 * dans les fonctions AjoutPosts et ListePosts:
 * AjoutPosts gère le formulaire d'ajout de post
 * ListePosts gère l'affichage de la liste des posts
 * 
 * Application en React, bootstrap employé pour simplifier l'affichage a priori responsive
 * 
 * NB : "Post" est employé en substitution de "post-it" par soucis de simplification
 */

// imports nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';

import ListePosts from './ListePosts'
import AjoutPosts from './AjoutPosts'



const root = ReactDOM.createRoot(document.getElementById('root'));

// Appel des fonctions d'affichage de formulaire d'ajout et de liste d'instances de post
root.render(
  <>
  <AjoutPosts/>
  <ListePosts/>
  </>
);
