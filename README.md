# Brif 17: Front-End de la Plateforme de Volontariat

Suite au développement de l'API REST pour la plateforme de volontariat de **YouCare**, il est nécessaire de créer une interface utilisateur conviviale et fonctionnelle pour permettre aux utilisateurs d'interagir avec cette API.

## Fonctionnalités Requises

### Gestion des Utilisateurs :
- **Inscription** : Les utilisateurs peuvent s'inscrire en fournissant :
  - Nom
  - Adresse e-mail
  - Mot de passe
- **Connexion** : Les utilisateurs doivent pouvoir se connecter à l'aide de leur adresse e-mail et mot de passe. 
- **Authentification JWT** : Un token d'authentification valide est généré après une connexion réussie.
- **Mise à jour du profil** : Les utilisateurs peuvent mettre à jour leur profil avec des informations telles que :
  - Nom
  - Adresse e-mail
  - Autres informations pertinentes

### Gestion des Annonces :
- **Création d'annonce par les organisateurs** : Les organisateurs peuvent créer une nouvelle annonce en fournissant :
  - Titre de l'événement
  - Type d'événement
  - Date
  - Description
  - Localisation
  - Compétences requises
- **Gestion des annonces** : Les organisateurs doivent pouvoir :
  - Créer, lire, mettre à jour et supprimer (CRUD) les annonces.
- **Validation des données** : Les champs obligatoires doivent être remplis et validés pour garantir leur intégrité lors de la création des annonces.
- **Consultation des annonces** : 
  - Les bénévoles peuvent consulter toutes les annonces disponibles.
  - Les annonces peuvent être filtrées par type d'événement ou par localisation pour faciliter la recherche.
- **Candidature aux annonces** : 
  - Les bénévoles peuvent postuler à une annonce en fournissant les informations nécessaires.
- **Gestion des demandes de bénévolat** : 
  - Les organisateurs peuvent consulter toutes les demandes reçues pour leurs annonces.
  - Ils peuvent accepter ou refuser les demandes en fonction des besoins de leur événement.

## Bonus :

- Les organisateurs peuvent noter les bénévoles après chaque événement.
- Les bénévoles peuvent utiliser leurs points pour bénéficier de récompenses ou d'avantages sur la plateforme.
- Système de réputation : Les bénévoles peuvent laisser des commentaires sur les organisateurs après chaque événement.
- Les administrateurs ont la possibilité de gérer les utilisateurs.

## Technologies Recommandées
Vous pouvez utiliser l'une des technologies suivantes pour développer le front-end de la plateforme :
- **JS Native** avec le moteur de template **Blade**
- Un framework ou library JavaScript tel que :
  - **Vue.js**
  - **React**
  - Tout autre framework de votre choix

---
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# YouCareUI-Vue.js
