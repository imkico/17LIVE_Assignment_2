function solution(recipes) {
  const ingredientsMap = {};

  for (const recipe of recipes) {
    const dish = recipe[0];
    const ingredients = recipe.slice(1);

    for (const ingredient of ingredients) {
      if (!ingredientsMap[ingredient]) {
        ingredientsMap[ingredient] = [dish];
      } else {
        ingredientsMap[ingredient].push(dish);
      }
    }
  }

  const ingredients = Object.keys(ingredientsMap).sort();
  for (const ingredient of ingredients) {
    ingredientsMap[ingredient] = ingredientsMap[ingredient].sort();
  }

  const result = [];
  for (const ingredient of ingredients) {
    if (ingredientsMap[ingredient].length > 1) {
      result.push([ingredient, ...ingredientsMap[ingredient]]);
    }
  }

  return result;
}

// let recipes = [
//   ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
//   ["Chicken Curry", "Chicken", "Curry Sauce"],
//   ["Fried Rice", "Rice", "Onions", "Nuts"],
//   ["Salad", "Spinach", "Nuts"],
//   ["Sandwich", "Cheese", "Bread"],
//   ["Quesadilla", "Chicken", "Cheese"]
// ];

// console.log(solution(recipes));
