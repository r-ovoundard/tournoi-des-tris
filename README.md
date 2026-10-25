# 🏆 Le grand tournoi des algorithmes de tri

**Six algorithmes de tri en JavaScript**, mis en compétition sur les mêmes données, avec la mesure et la comparaison de leurs temps de calcul.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)

---

## 📌 Le principe

Un TP de ma formation à F2I : programmer six façons différentes de trier un tableau, puis les faire **s'affronter** sur le même jeu de données pour comprendre pourquoi certaines sont beaucoup plus rapides que d'autres.

**Les règles du tournoi :**
- les données : un tableau de **180 nombres entiers**, positifs et négatifs, avec quelques doublons ;
- chaque fonction renvoie un **nouveau tableau trié**, sans jamais modifier le tableau d'origine ;
- la méthode `sort()` de JavaScript est **interdite** pour trier : tout est écrit à la main ;
- le temps de chaque algorithme est mesuré avec `performance.now()`.

---

## ⚔️ Les six concurrents

| Algorithme | Principe | Complexité moyenne |
|---|---|---|
| **Tri à bulles** | compare les voisins deux à deux et les échange, jusqu'à ce que plus rien ne bouge | O(n²) |
| **Tri par sélection** | cherche le plus petit élément restant et le place au début | O(n²) |
| **Tri par insertion** | insère chaque élément à sa place dans la partie déjà triée, comme des cartes en main | O(n²) |
| **Tri fusion** | coupe le tableau en deux, trie chaque moitié, puis les fusionne | O(n log n) |
| **Tri rapide** | choisit un pivot, range les plus petits à gauche et les plus grands à droite, puis recommence | O(n log n) |
| **Bogo sort** | mélange le tableau au hasard… jusqu'à ce qu'il soit trié par chance | O(n × n!) |

---

## 📊 Les résultats

| Rang | Algorithme | Temps (180 éléments) |
|---|---|---|
| 🥇 | Tri fusion | 0,20 ms |
| 🥈 | Tri rapide | 0,22 ms |
| 🥉 | Tri par insertion | 0,28 ms |
| 4 | Tri par sélection | 0,42 ms |
| 5 | Tri à bulles | 2,44 ms |
| — | Bogo sort *(seulement 8 éléments)* | 14,48 ms |

> Les temps varient d'une exécution à l'autre : ils dépendent de l'ordinateur et de l'état du moteur JavaScript. Ce qui compte, c'est **l'ordre de grandeur** entre les algorithmes.

---

## 💡 Ce que j'en retiens

- **Les tris en O(n log n)** (fusion et rapide) gagnent : ils divisent le problème en morceaux plus petits. Plus le tableau est grand, plus leur avance se creuse.
- **Le tri par insertion** reste très correct sur un petit tableau : c'est pour ça qu'on l'utilise souvent pour finir les petits morceaux dans des tris plus avancés.
- **Le tri à bulles** est le plus simple à comprendre, mais le plus lent des tris « sérieux ».
- **Le bogo sort** ne peut pas trier les 180 éléments : il faudrait essayer jusqu'à 180! mélanges, un nombre de 330 chiffres. Même sur 8 éléments, il est déjà le plus lent du tournoi.
- **Choisir le bon algorithme compte autant que bien coder** : c'est la notion de **complexité**.

---

## 🚀 Lancer le tournoi

Avec Node.js installé :

```bash
node script.js
```

---

## 👤 Auteur

**Nissi Rich OVOUNDARD** – développeur web full stack en formation
Portfolio : [r-ovoundard.github.io](https://r-ovoundard.github.io) · GitHub : [@r-ovoundard](https://github.com/r-ovoundard)
