function uniteUnique(...arrays) {
  const result = []; // Tableau pour stocker les valeurs uniques

  // Parcourir chaque tableau passé en argument
  for (const array of arrays) {
    for (const item of array) {
      // Ajouter seulement si l'élément n'est pas déjà dans result
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }

  return result;
}


console.log(uniteUnique([1, 2, 4], [2, 3, 5])); // [1, 3, 2, 5, 4]
