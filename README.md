# annuaire-entreprises.data.gouv.fr

Ce site est disponible en ligne : [L’Annuaire des Entreprises](https://annuaire-entreprises.data.gouv.fr)

Ce site a pour vocation de mettre à disposition des citoyens et des agents les données ouvertes "Open-data" des entreprises, associations et administrations présentes dans la base SIRENE.

## A propos des choix d'architecture

Ce site utilise Next.js de manière modifiée :

- en developpement, next.js tourne de manière normale.
- en production, la ré-hydratation de react dans le navigateur est désactivée. Next.js se comporte comme un framework de rendu serveur traditionnel.

Pourquoi désactiver la ré-hydratation ? Par soucis d'inclusivité et du frugalité :

1. Le site peut fonctionner en mode dégradé sans javascript
2. Les pages du site sont beaucoup, beaucoup, beaucoup plus légères, ce qui avec un bon débit donne le meme confort qu'une SPA, et avec un mauvais débit est plus utilisable q'une SPA

Dans ce cas pourquoi utiliser Next.js ? Pour bénéficier de l'ecosystème, de l'outillage dev (HotReload en local, typescript) et pour des raisons de compétences et de préférences.

## Installation

``` bash
# Installation
npm i

# Lancer le site en dev
npm run dev

# Lancer le site en prod
export PORT=3000
npm run build && npm run start

```

**NB**: le code de l'API est [disponible ici.](https://github.com/etalab/api-annuaire-entreprises)

## Licence

Ce projet est sous AGPL 3.0