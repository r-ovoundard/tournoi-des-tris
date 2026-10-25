const DATA = [9980, -1539, -1749, 2213, 2880, -4829, 8434, 8494, -4340, -4511, 4994, -1820, 3604, 
8562, 1922,
 9543, 1483, 4379, 5692, 6291, 8010, 5341, 5698, 5700, 9757, 9980, 8609, -1186, 7938, 
3153,
 6249, 8967, 9848, -4049, -1164, 4040, -2052, -3995, 5786, -557, -3906, 755, 6098, -1103,
-576,
 5136, 1403, -2114, 8888, -4616, -4256, 6265, 8348, 9706, 8131, -4975, 3808, 2202, 
-1539, -2270,
 9518, -4791, 5583, 4995, 5816, 2303, 3132, -4059, -3127, 6819, -3865, 9069, -1879, 
3741, -4391,
 2224, 4147, 9421, 7493, -1660, 2755, -4700, 2678, 4198, -1975, 4538, -541, 6661, 8530, 
8366,
 -942, 0, -2811, 6728, 8519, -2818, -3399, -1, -4472, -4462, 1315, 3423, 773, 8957, -1072,
 1768, 5034, 6471, 2448, 2633, 6875, -4818, -164, -1622, -4358, 6791, 4538, -59, -2793, 
-5000,
 2763, 5276, 6408, 2255, 3341, 8800, 1462, -629, 8413, 7422, -991, 7249, 8531, 9260, 
7087,
 4432, -1947, 9722, 1861, 9969, 5850, 7570, -4785, 6620, 7689, 1912, 4882, -2961, 1467, 
9999,
 2784, 4116, -3178, -1864, -3153, 1577, 9553, 789, 8310, 649, 5683, -4221, -4439, -3589, 
4444,
 -3468, 7133, 8205, -4651, -2020, 4238, 3193, -2102, -131, 1105, 349, -3093, 9346, -3658,
-2570
];

function benchmark(nom, algorithme, donnees) {
 const copie = [...donnees];
 const debut = performance.now();
 const resultat = algorithme(copie);
 const fin = performance.now();
 const duree = fin - debut;
 console.log(`${nom} : ${duree.toFixed(4)} ms`);
 return { nom, duree, resultat };
}

// Algorithme BUBBLE SORT
function bubbleSort(donnees) {
  const values = [...donnees];
for (let fin = values.length -1; fin > 0; fin--) {
     let swap = false;
     for (let i = 0; i < fin; i++) {
      if (values[i] > values[i + 1]) {
        [values[i], values[i + 1]] = [values[i + 1], values[i]];
         swap = true;
        }
       }
       if (!swap) break;
    }
   
  return values;
  }
  

benchmark("BUBBLE SORT", bubbleSort, DATA);


// SELECTION SORT
function selectionSort(donnees) {
    const values = [...donnees];

    for (let i = 0; i < values.length - 1; i++) {
        let indiceMin = i;

        for (let j = i + 1; j < values.length; j++) {
            if (values[j] < values[indiceMin]) {
                indiceMin = j;
            }
        }

        if (indiceMin !== i) {
            [values[i], values[indiceMin]] = [values[indiceMin], values[i]];
        }
    }

    return values;   
}

benchmark("Selection Sort", selectionSort, DATA);


// INSERTION SORT
function insertionSort(donnees) {
    const values = [...donnees];             

    for (let i = 1; i < values.length; i++) {
        const cle = values[i];
        let j = i - 1;
        
        while (j >= 0 && values[j] > cle) {
            values[j + 1] = values[j];
            j = j - 1;
        }
        values[j + 1] = cle;
    }
     
    return values;                      
}

benchmark("Insertion Sort", insertionSort, DATA);


//MERGE SORT
function mergeSort(donnees) {
  // Cas de base : 0 ou 1 élément, c'est déjà trié
  if (donnees.length <= 1) return [...donnees];

  // 1. On coupe en deux et on trie chaque moitié (appels récursifs)
  const milieu = Math.floor(donnees.length / 2);
  const gauche = mergeSort(donnees.slice(0, milieu));
  const droite = mergeSort(donnees.slice(milieu));

  // 2. On fusionne les deux moitiés triées
  const values = [];
  let i = 0;   // position dans la moitié gauche
  let j = 0;   // position dans la moitié droite

  while (i < gauche.length && j < droite.length) {
    if (gauche[i] <= droite[j]) {
      values.push(gauche[i]);   // le plus petit est à gauche
      i++;
    } else {
      values.push(droite[j]);   // le plus petit est à droite
      j++;
    }
  }

  // 3. Il reste des éléments d'un seul côté : on les ajoute
  while (i < gauche.length) values.push(gauche[i++]);
  while (j < droite.length) values.push(droite[j++]);

  return values;
}
benchmark("Merge Sort", mergeSort, DATA);


// QUICK SORT
function quickSort(donnees) {
    // Cas de base : 0 ou 1 élément, c'est déjà trié
    if (donnees.length <= 1) return [...donnees];   // copie : l'original reste intact

    // On choisit un pivot : l'élément du milieu
    const pivot = donnees[Math.floor(donnees.length / 2)];

    const plusPetits = [];   // les éléments plus petits que le pivot
    const egaux = [];        // les éléments égaux au pivot (doublons)
    const plusGrands = [];   // les éléments plus grands que le pivot

    // On range chaque élément dans le bon groupe
    for (let i = 0; i < donnees.length; i++) {
        if (donnees[i] < pivot) {
            plusPetits.push(donnees[i]);
        } else if (donnees[i] > pivot) {
            plusGrands.push(donnees[i]);
        } else {
            egaux.push(donnees[i]);
        }
    }

    // On trie les petits et les grands (récursivité), puis on recolle le tout
    return [...quickSort(plusPetits), ...egaux, ...quickSort(plusGrands)];
}

benchmark("Quick Sort", quickSort, DATA);


// BOGO SORT
function bogoSort(donnees) {
  // Sécurité : au-delà de 10 éléments, il ne finirait jamais
  if (donnees.length > 10) {
    throw new Error("bogoSort est limité à 10 éléments, utilise DATA.slice(0, 8)");
  }

  const values = [...donnees];            // copie : l'original reste intact

  while (true) {
    // 1. On vérifie si le tableau est trié
    let trie = true;
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] > values[i + 1]) {
        trie = false;                     // une paire mal rangée : pas trié
        break;
      }
    }

    if (trie) break;                      // trié : on sort de la boucle

    // 2. Sinon, on mélange le tableau au hasard
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));   // position au hasard entre 0 et i
      [values[i], values[j]] = [values[j], values[i]]; // on échange
    }
  }

  return values;
}
benchmark("Bogo Sort", bogoSort, DATA.slice(0, 8));
