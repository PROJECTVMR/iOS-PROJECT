# Projet de cartes bancaires

Ce projet est une application web simple permettant de créer et consulter des cartes bancaires.

## Fonctionnalités

- **Création de carte bancaire :** Permet de créer de nouvelles cartes bancaires en fournissant des informations telles que le numéro de carte, le prénom, le nom et le numéro SSID.
- **Consultation de carte bancaire :** Permet de rechercher une carte bancaire existante en saisissant son numéro.
- **Affichage de détails de carte bancaire :** Affiche les détails d'une carte bancaire trouvée, y compris l'identifiant, le nom et le numéro de carte.

## Structure du projet

```
├── index.html
├── View.html
├── ViewStyle.css
├── Controller.js
├── Modele.js
└── README.md

```


- **Modèle :** `Modele.js` - Définit la classe `Card` représentant une carte bancaire et initialise la liste de cartes.
- **Vue :** `View.html/ViewStyle.css` - Contient la structure HTML et le contenu visuel de l'application.
- **Contrôleur :** `Controller.js` - Gère les interactions de l'utilisateur et coordonne les actions entre la vue et le modèle.

## Utilisation

1. Ouvrez `View.html` dans un navigateur web.
2. Utilisez le formulaire pour créer une nouvelle carte bancaire ou pour rechercher une carte existante.

## Sécurité

Toutes les données utilisateur sont échappées pour éviter les attaques par injection JavaScript.

## Contribution

Nous accueillons avec plaisir les contributions à ce projet ! Voici comment vous pouvez contribuer :

1. **Fork :** Commencez par forker ce dépôt dans votre propre compte GitHub en cliquant sur le bouton "Fork" en haut à droite de cette page.

2. **Clonage :** Clonez votre fork sur votre machine locale en utilisant `git clone <votre-URL-de-fork>`.

3. **Apportez des modifications :** Travaillez sur votre code, ajoutez des fonctionnalités ou corrigez des bugs.

4. **Commit :** Une fois vos modifications terminées, committez-les avec un message descriptif.

5. **Push :** Poussez vos modifications vers votre fork avec `git push origin nom-de-votre-branche`.

6. **Demande de tirage (Pull Request) :** Ouvrez une demande de tirage vers le dépôt original, en expliquant vos modifications.

Nous examinerons vos contributions dès que possible. Merci pour votre participation !
