<h1>ArgentBank 🏦💵 </h1>


README en Français

Description FR :
Ceci est un projet réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez OpenClassrooms

Écrivez des appels à l'API REST pour connecter le front au back et modélisez une API.

<h2>Compétences évaluées :</h2>
<ul>
  <li>Implémenter un gestionnaire d'état dans une application React 🔄</li>
  <li>Utiliser Redux et Redxu Tool kit</li>
  <li>Interagir avec une API 🤝</li>
  <li>Modéliser une API 📝</li>
  <li>S'authentifier à une API 🔑</li>
</ul>

<h2>Situation (fictive) du projet :</h2>
Développeur Front-end dans une agence spécialisée dans le développement d’applications web. L’agence à un nouveau projet avec une nouvelle banque qui a besoin d'aide pour mettre en place son application. Le projet se décompose en deux phases :

Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
Phase 2 : Transactions - Spécifier les endpoints d’API nécessaires pour une deuxième mission.
Mon rôle lors de la phase 1 a été de développer l’application web avec authentification des utilisateurs à l’aide de React et Redux. Concernant la phase 2, mon rôle a été de proposer un modèle pour la conception de l’API des transactions à ouvrir avec Swagger.

Phase 1 : Contraintes techniques :
Créer l’application web (responsive) avec React.

Comme point de départ, le HTML statique et le CSS est fourni pour la page d'accueil, la page de connexion et la page de profil.
Utiliser Redux pour gérer le state de l'application, notamment l’application doit avoir :

<ol>
  <li>Un store pour gérer les données</li>
  <li>Des actions pour l’envoi des informations</li>
  <li>Des reducers pour gérer les changements d'état de l'application</li>
</ol>


Phase 1 : Contraintes fonctionnelles :
L'utilisateur peut visiter la page d'accueil
L'utilisateur peut se connecter au système
Accédez à la page de connexion (/login)
Remplir le formulaire de connexion avec ses identifiants
Se connecter à l’application en utilisant des jetons JWT pour l'authentification
Naviguer avec succès vers la page de profil (/profile)
L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
Accédez à la page de profil (/profile)
Voir leur prénom sur la page de profil
Voir les informations de compte bancaire
L'utilisateur peut modifier le profil (nom et prénom) et conserver les données dans la base de données.
L'utilisateur peut se déconnecter du système
Voir le bouton de déconnexion une fois connecté
Cliquez sur le bouton de déconnexion, déconnecte l’utilisateur et celui-ci revient à la page d'accueil (/)


<h2>Installation : </h2>
Procédure d'installation :

Cloner le repository: https://github.com/damodred53/argent_bank
Cloner le back-end du projet : https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API
Ou bien celui présent dans le projet sur cette page dans la aprtie back-end spécifiquement
Installation et lancement du Back-end :
Allez dans le dossier "Back-end" :

Installer toutes les dépendances pour le Back-end :

npm install ou yarn
Lancer le back-end sur le port 3001 (port par défaut) :
npm run dev ou yarn run dev
Installation et lancement du Front-end :
Allez dans le dossier "Front-end" :

Installer toutes les dépendances pour Front-end.


