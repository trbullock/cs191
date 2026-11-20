const ALLERGENS = [
  { value: "milk", label: "Milk / dairy" },
  { value: "eggs", label: "Eggs" },
  { value: "wheat", label: "Wheat" },
  { value: "soy", label: "Soy" },
  { value: "fish", label: "Fish" },
  { value: "shellfish", label: "Shellfish" },
  { value: "peanuts", label: "Peanuts" },
  { value: "tree-nuts", label: "Tree nuts" },
  { value: "sesame", label: "Sesame" },
];

const RECIPES = [
  {
    id: "blueberry-oats",
    name: "Blueberry chia overnight oats",
    description: "Creamy oats, sweet berries, and a little morning crunch.",
    mealType: "breakfast",
    cuisine: "American",
    time: 10,
    servings: 1,
    artwork: "blueberry-oats",
    artBackground: "#e9eee1",
    allergens: ["milk"],
    nutrition: { calories: 425, protein: 22, carbs: 59, fat: 11, fiber: 10, sodium: 145 },
    ingredients: [
      { key: "rolled-oats", name: "Rolled oats", amount: "½ cup" },
      { key: "greek-yogurt", name: "Plain Greek yogurt", amount: "½ cup" },
      { key: "milk", name: "Milk", amount: "¼ cup" },
      { key: "blueberries", name: "Blueberries", amount: "½ cup" },
      { key: "chia-seeds", name: "Chia seeds", amount: "1 tbsp" },
      { key: "honey", name: "Honey", amount: "1 tsp" },
    ],
    steps: [
      "Stir the oats, yogurt, milk, chia seeds, and honey together in a jar.",
      "Cover and chill for at least 4 hours, or overnight.",
      "Top with blueberries and enjoy cold.",
    ],
    substitutions: {
      "greek-yogurt": [{ name: "unsweetened oat yogurt", allergens: [] }],
      milk: [{ name: "unsweetened oat drink", allergens: [] }],
      blueberries: [{ name: "sliced strawberries", allergens: [] }],
      honey: [{ name: "maple syrup", allergens: [] }],
    },
  },
  {
    id: "avocado-egg-toast",
    name: "Avocado & jammy egg toast",
    description: "Sourdough, buttery avocado, and a bright squeeze of lemon.",
    mealType: "breakfast",
    cuisine: "American",
    time: 15,
    servings: 1,
    artwork: "avocado-toast",
    artBackground: "#f3eadc",
    allergens: ["eggs", "wheat"],
    nutrition: { calories: 515, protein: 23, carbs: 49, fat: 25, fiber: 11, sodium: 510 },
    ingredients: [
      { key: "sourdough", name: "Sourdough bread", amount: "2 slices" },
      { key: "eggs", name: "Egg", amount: "1 large" },
      { key: "avocado", name: "Avocado", amount: "½ medium" },
      { key: "lemon", name: "Lemon juice", amount: "1 tsp" },
      { key: "chili-flakes", name: "Chili flakes", amount: "Pinch" },
    ],
    steps: [
      "Simmer the egg for 7 minutes, then cool briefly and peel.",
      "Toast the sourdough. Mash avocado with lemon juice and a pinch of salt.",
      "Spread avocado over toast, halve the egg, and finish with chili flakes.",
    ],
    substitutions: {
      avocado: [{ name: "white bean mash with lemon", allergens: [] }],
      eggs: [{ name: "sautéed mushrooms", allergens: [] }],
      sourdough: [{ name: "gluten-free bread", allergens: [] }],
      lemon: [{ name: "lime juice", allergens: [] }],
    },
  },
  {
    id: "mushroom-hash",
    name: "Garden mushroom breakfast hash",
    description: "Crispy potatoes with tender greens and a little feta.",
    mealType: "breakfast",
    cuisine: "Mediterranean",
    time: 25,
    servings: 1,
    artwork: "mushroom-hash",
    artBackground: "#efe9dc",
    allergens: ["milk"],
    nutrition: { calories: 470, protein: 18, carbs: 56, fat: 19, fiber: 9, sodium: 520 },
    ingredients: [
      { key: "potatoes", name: "Baby potatoes", amount: "1 cup, quartered" },
      { key: "mushrooms", name: "Cremini mushrooms", amount: "¾ cup, sliced" },
      { key: "spinach", name: "Baby spinach", amount: "1 cup" },
      { key: "red-onion", name: "Red onion", amount: "¼, sliced" },
      { key: "feta", name: "Feta", amount: "2 tbsp, crumbled" },
      { key: "olive-oil", name: "Olive oil", amount: "1 tsp" },
    ],
    steps: [
      "Warm the oil in a skillet over medium heat. Add potatoes and cook until golden, about 12 minutes.",
      "Add mushrooms and onion; cook until tender, then fold in spinach.",
      "Serve with crumbled feta and freshly ground pepper.",
    ],
    substitutions: {
      mushrooms: [{ name: "diced zucchini", allergens: [] }],
      spinach: [{ name: "baby kale", allergens: [] }],
      feta: [{ name: "lemony white beans", allergens: [] }],
      "red-onion": [{ name: "sliced scallions", allergens: [] }],
    },
  },
  {
    id: "chicken-quinoa",
    name: "Lemony chicken quinoa bowl",
    description: "A fresh, herby bowl with crisp cucumber and fluffy quinoa.",
    mealType: "lunch",
    cuisine: "Mediterranean",
    time: 30,
    servings: 1,
    artwork: "chicken-quinoa",
    artBackground: "#e6eee0",
    allergens: ["milk"],
    nutrition: { calories: 610, protein: 46, carbs: 58, fat: 19, fiber: 9, sodium: 590 },
    ingredients: [
      { key: "chicken", name: "Chicken breast", amount: "4 oz" },
      { key: "quinoa", name: "Quinoa", amount: "¾ cup, cooked" },
      { key: "cucumber", name: "Cucumber", amount: "½ cup, diced" },
      { key: "cherry-tomatoes", name: "Cherry tomatoes", amount: "½ cup, halved" },
      { key: "feta", name: "Feta", amount: "2 tbsp" },
      { key: "lemon", name: "Lemon juice", amount: "1 tbsp" },
      { key: "olive-oil", name: "Olive oil", amount: "1 tsp" },
    ],
    steps: [
      "Season the chicken and cook in a skillet until golden and cooked through, about 5–6 minutes per side. Rest, then slice.",
      "Toss warm quinoa with lemon juice, olive oil, cucumber, and tomatoes.",
      "Top with chicken and feta. Finish with herbs if you have them.",
    ],
    substitutions: {
      chicken: [{ name: "roasted chickpeas", allergens: [] }],
      quinoa: [{ name: "brown rice", allergens: [] }],
      cucumber: [{ name: "diced bell pepper", allergens: [] }],
      feta: [{ name: "lemony white beans", allergens: [] }],
      "cherry-tomatoes": [{ name: "diced cucumber", allergens: [] }],
    },
  },
  {
    id: "black-bean-tacos",
    name: "Smoky black bean tacos",
    description: "Warm corn tortillas, creamy beans, and a crunchy lime slaw.",
    mealType: "lunch",
    cuisine: "Mexican",
    time: 20,
    servings: 1,
    artwork: "black-bean-tacos",
    artBackground: "#f2e7d8",
    allergens: [],
    nutrition: { calories: 485, protein: 21, carbs: 66, fat: 14, fiber: 16, sodium: 570 },
    ingredients: [
      { key: "black-beans", name: "Black beans", amount: "¾ cup, drained" },
      { key: "corn-tortillas", name: "Corn tortillas", amount: "3 small" },
      { key: "cabbage", name: "Shredded cabbage", amount: "1 cup" },
      { key: "avocado", name: "Avocado", amount: "¼, sliced" },
      { key: "lime", name: "Lime juice", amount: "1 tbsp" },
      { key: "smoked-paprika", name: "Smoked paprika", amount: "¼ tsp" },
    ],
    steps: [
      "Warm the beans with smoked paprika and a splash of water in a small pan.",
      "Toss cabbage with lime juice and a pinch of salt.",
      "Warm the tortillas, fill with beans and slaw, and top with avocado.",
    ],
    substitutions: {
      "black-beans": [{ name: "pinto beans", allergens: [] }],
      cabbage: [{ name: "shredded lettuce", allergens: [] }],
      avocado: [{ name: "tomato salsa", allergens: [] }],
      lime: [{ name: "lemon juice", allergens: [] }],
    },
  },
  {
    id: "tofu-noodles",
    name: "Ginger sesame tofu noodles",
    description: "Golden tofu and crisp vegetables in a cozy ginger sauce.",
    mealType: "dinner",
    cuisine: "Japanese",
    time: 30,
    servings: 1,
    artwork: "tofu-noodles",
    artBackground: "#e4ece8",
    allergens: ["soy", "wheat", "sesame"],
    nutrition: { calories: 620, protein: 31, carbs: 77, fat: 20, fiber: 8, sodium: 690 },
    ingredients: [
      { key: "tofu", name: "Extra-firm tofu", amount: "5 oz" },
      { key: "wheat-noodles", name: "Wheat noodles", amount: "2 oz, dry" },
      { key: "broccoli", name: "Broccoli florets", amount: "1 cup" },
      { key: "carrots", name: "Carrot", amount: "½, thinly sliced" },
      { key: "soy-sauce", name: "Reduced-sodium soy sauce", amount: "1 tbsp" },
      { key: "sesame-oil", name: "Sesame oil", amount: "1 tsp" },
      { key: "ginger", name: "Fresh ginger", amount: "1 tsp, grated" },
    ],
    steps: [
      "Cook the noodles according to the package directions. Drain and set aside.",
      "Pat the tofu dry, cube it, and sear in a hot skillet until golden on most sides.",
      "Add broccoli, carrot, ginger, soy sauce, and a splash of water. Cook until crisp-tender; toss with noodles and sesame oil.",
    ],
    substitutions: {
      tofu: [{ name: "sliced mushrooms", allergens: [] }],
      "wheat-noodles": [{ name: "rice noodles", allergens: [] }],
      broccoli: [{ name: "snap peas", allergens: [] }],
      carrots: [{ name: "sliced bell pepper", allergens: [] }],
      "soy-sauce": [{ name: "coconut aminos", allergens: [] }],
      "sesame-oil": [{ name: "olive oil", allergens: [] }],
    },
  },
  {
    id: "salmon-rice",
    name: "Citrus-glazed salmon rice bowl",
    description: "Flaky salmon, warm rice, and bright crunchy vegetables.",
    mealType: "dinner",
    cuisine: "Japanese",
    time: 25,
    servings: 1,
    artwork: "salmon-rice",
    artBackground: "#f2e5dc",
    allergens: ["fish", "soy", "sesame"],
    nutrition: { calories: 650, protein: 39, carbs: 67, fat: 23, fiber: 7, sodium: 560 },
    ingredients: [
      { key: "salmon", name: "Salmon fillet", amount: "4 oz" },
      { key: "brown-rice", name: "Brown rice", amount: "¾ cup, cooked" },
      { key: "edamame", name: "Shelled edamame", amount: "¼ cup" },
      { key: "cucumber", name: "Cucumber", amount: "½ cup, sliced" },
      { key: "tamari", name: "Tamari", amount: "1 tsp" },
      { key: "orange", name: "Orange juice", amount: "1 tbsp" },
      { key: "sesame-seeds", name: "Sesame seeds", amount: "½ tsp" },
    ],
    steps: [
      "Brush the salmon with tamari and orange juice. Bake at 400°F (200°C) for 10–12 minutes, until it flakes easily.",
      "Warm the rice and edamame, then spoon into a bowl.",
      "Add cucumber and salmon. Sprinkle with sesame seeds and serve.",
    ],
    substitutions: {
      salmon: [{ name: "roasted chickpeas", allergens: [] }],
      "brown-rice": [{ name: "quinoa", allergens: [] }],
      edamame: [{ name: "shelled green peas", allergens: [] }],
      cucumber: [{ name: "shredded carrot", allergens: [] }],
      tamari: [{ name: "coconut aminos", allergens: [] }],
      "sesame-seeds": [{ name: "toasted pumpkin seeds", allergens: [] }],
    },
  },
  {
    id: "hummus-crunch",
    name: "Hummus & rainbow crunch plate",
    description: "A no-cook snack plate with creamy hummus and crisp vegetables.",
    mealType: "snack",
    cuisine: "Mediterranean",
    time: 10,
    servings: 1,
    artwork: "hummus-plate",
    artBackground: "#e7eee2",
    allergens: ["wheat", "sesame"],
    nutrition: { calories: 390, protein: 14, carbs: 49, fat: 17, fiber: 12, sodium: 590 },
    ingredients: [
      { key: "hummus", name: "Classic hummus", amount: "⅓ cup" },
      { key: "pita", name: "Whole-wheat pita", amount: "½ large" },
      { key: "carrots", name: "Carrot sticks", amount: "½ cup" },
      { key: "cucumber", name: "Cucumber spears", amount: "½ cup" },
      { key: "snap-peas", name: "Sugar snap peas", amount: "½ cup" },
      { key: "grapes", name: "Grapes", amount: "½ cup" },
    ],
    steps: [
      "Spoon the hummus into a small bowl and drizzle with olive oil, if you like.",
      "Cut the pita into wedges and arrange with the vegetables and grapes.",
      "Dip, crunch, and enjoy. No cooking needed.",
    ],
    substitutions: {
      hummus: [{ name: "white bean dip", allergens: [] }],
      pita: [{ name: "rice crackers", allergens: [] }],
      carrots: [{ name: "bell pepper strips", allergens: [] }],
      cucumber: [{ name: "celery sticks", allergens: [] }],
      grapes: [{ name: "apple slices", allergens: [] }],
    },
  },
  {
    id: "berry-yogurt-smoothie",
    name: "Berry yogurt smoothie bowl",
    description: "A cool, spoonable berry bowl with a toasted seed crunch.",
    mealType: "snack",
    cuisine: "American",
    time: 10,
    servings: 1,
    artwork: "smoothie-bowl",
    artBackground: "#eee7ef",
    allergens: ["milk"],
    nutrition: { calories: 355, protein: 24, carbs: 47, fat: 8, fiber: 8, sodium: 135 },
    ingredients: [
      { key: "greek-yogurt", name: "Plain Greek yogurt", amount: "¾ cup" },
      { key: "strawberries", name: "Frozen strawberries", amount: "1 cup" },
      { key: "banana", name: "Banana", amount: "½ medium" },
      { key: "pumpkin-seeds", name: "Pumpkin seeds", amount: "1 tbsp" },
      { key: "rolled-oats", name: "Toasted rolled oats", amount: "2 tbsp" },
    ],
    steps: [
      "Blend the yogurt, strawberries, and banana until thick and smooth.",
      "Pour into a bowl and finish with pumpkin seeds and toasted oats.",
      "Add a splash of milk if you prefer a thinner texture.",
    ],
    substitutions: {
      "greek-yogurt": [{ name: "unsweetened oat yogurt", allergens: [] }],
      strawberries: [{ name: "frozen blueberries", allergens: [] }],
      banana: [{ name: "½ cup frozen mango", allergens: [] }],
      "rolled-oats": [{ name: "crisp rice cereal", allergens: [] }],
    },
  },
];

const NUTRIENT_RULES = {
  highProtein: (nutrition) => nutrition.protein >= 25,
  lowerCarb: (nutrition) => nutrition.carbs <= 45,
  lowerFat: (nutrition) => nutrition.fat <= 20,
  highFiber: (nutrition) => nutrition.fiber >= 8,
  lowerSodium: (nutrition) => nutrition.sodium <= 600,
};

const form = document.querySelector("#meal-finder");
const resultsElement = document.querySelector("#results");
const resultsCount = document.querySelector("#results-count");
const allergenOptions = document.querySelector("#allergen-options");
const ingredientOptions = document.querySelector("#ingredient-options");

function createCheckboxOption(name, value, label) {
  const wrapper = document.createElement("label");
  wrapper.className = "check-option";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = name;
  input.value = value;

  const text = document.createElement("span");
  text.textContent = label;
  wrapper.append(input, text);
  return wrapper;
}

function populateFilters() {
  for (const allergen of ALLERGENS) {
    allergenOptions.append(createCheckboxOption("allergens", allergen.value, allergen.label));
  }

  const ingredients = new Map();
  for (const recipe of RECIPES) {
    for (const ingredient of recipe.ingredients) {
      ingredients.set(ingredient.key, ingredient.name);
    }
  }

  for (const [value, label] of [...ingredients].sort((a, b) => a[1].localeCompare(b[1]))) {
    ingredientOptions.append(createCheckboxOption("dislikedIngredients", value, label));
  }
}

function selectedValues(name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function getMatches() {
  const targetCalories = Number(form.elements.calories.value);
  const mealType = form.elements.mealType.value;
  const cuisine = form.elements.cuisine.value;
  const selectedAllergens = selectedValues("allergens");
  const dislikedIngredients = selectedValues("dislikedIngredients");
  const nutrientPreferences = selectedValues("nutrition");

  return RECIPES
    .filter((recipe) => recipe.mealType === mealType)
    .filter((recipe) => Math.abs(recipe.nutrition.calories - targetCalories) <= 300)
    .filter((recipe) => cuisine === "any" || recipe.cuisine === cuisine)
    .filter((recipe) => !recipe.allergens.some((allergen) => selectedAllergens.includes(allergen)))
    .filter((recipe) => nutrientPreferences.every((preference) => NUTRIENT_RULES[preference](recipe.nutrition)))
    .map((recipe) => ({
      recipe,
      calorieDifference: Math.abs(recipe.nutrition.calories - targetCalories),
    }))
    .sort((a, b) => a.calorieDifference - b.calorieDifference)
    .slice(0, 5)
    .map(({ recipe }) => recipe);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function formatAllergens(recipe) {
  const labels = recipe.allergens.map((value) => ALLERGENS.find((item) => item.value === value)?.label ?? value);
  return labels.length ? `Contains: ${labels.join(", ")}` : "No listed major allergens";
}

function getSubstitutionNotes(recipe, dislikedIngredients, excludedAllergens) {
  return dislikedIngredients
    .filter((key) => recipe.ingredients.some((ingredient) => ingredient.key === key))
    .map((key) => {
      const ingredient = recipe.ingredients.find((item) => item.key === key);
      const suggestions = recipe.substitutions?.[key] ?? [];
      const safeSuggestions = suggestions.filter((item) => !item.allergens.some((allergen) => excludedAllergens.includes(allergen)));
      return {
        ingredient: ingredient.name,
        suggestion: safeSuggestions.map((item) => item.name).join(" or "),
      };
    });
}

function createNutritionSummary(recipe) {
  const summary = createElement("div", "nutrition-summary");
  const facts = [
    ["calories", recipe.nutrition.calories, "kcal"],
    ["protein", recipe.nutrition.protein, "g"],
    ["carbs", recipe.nutrition.carbs, "g"],
    ["fat", recipe.nutrition.fat, "g"],
    ["fiber", recipe.nutrition.fiber, "g"],
    ["sodium", recipe.nutrition.sodium, "mg"],
  ];

  for (const [label, amount, unit] of facts) {
    const item = createElement("div");
    item.append(
      createElement("strong", "", `${amount}${unit}`),
      createElement("span", "", label),
    );
    summary.append(item);
  }
  return summary;
}

function createRecipeCard(recipe, dislikedIngredients, excludedAllergens) {
  const card = createElement("article", "recipe-card");
  const artWrap = createElement("div", "recipe-art-wrap");
  artWrap.style.setProperty("--art-bg", recipe.artBackground);
  const art = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  art.classList.add("recipe-art");
  art.setAttribute("viewBox", "0 0 180 150");
  art.setAttribute("role", "img");
  art.setAttribute("aria-label", recipe.name);
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `assets/meal-art.svg#${recipe.artwork}`);
  art.append(use);
  artWrap.append(art, createElement("span", "time-pill", `${recipe.time} min`));

  const content = createElement("div", "recipe-content");
  const meta = createElement("div", "recipe-meta");
  meta.append(
    createElement("span", "", recipe.mealType),
    createElement("span", "cuisine-tag", recipe.cuisine),
  );
  content.append(
    meta,
    createElement("h3", "", recipe.name),
    createElement("p", "recipe-description", recipe.description),
    createNutritionSummary(recipe),
  );

  const toggle = createElement("button", "recipe-toggle");
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", "false");
  const toggleText = createElement("span", "", "View recipe");
  const toggleIcon = createElement("span", "", "+");
  toggleIcon.setAttribute("aria-hidden", "true");
  toggle.append(toggleText, toggleIcon);

  const details = createElement("div", "recipe-details");
  details.hidden = true;
  details.append(createElement("h4", "", `Ingredients · serves ${recipe.servings}`));
  const ingredients = createElement("ul");
  for (const ingredient of recipe.ingredients) {
    ingredients.append(createElement("li", "", `${ingredient.amount} ${ingredient.name}`));
  }
  details.append(ingredients);

  const swaps = getSubstitutionNotes(recipe, dislikedIngredients, excludedAllergens);
  for (const swap of swaps) {
    const note = createElement("p", "swap-note");
    if (swap.suggestion) {
      note.append(
        document.createTextNode("You’re skipping "),
        createElement("strong", "", swap.ingredient),
        document.createTextNode(` — try ${swap.suggestion} instead. You can choose whether to make the swap.`),
      );
    } else {
      note.append(
        document.createTextNode("You’re skipping "),
        createElement("strong", "", swap.ingredient),
        document.createTextNode(". No substitute is listed for this recipe."),
      );
    }
    details.append(note);
  }

  details.append(createElement("h4", "", "How to make it"));
  const steps = createElement("ol");
  for (const step of recipe.steps) steps.append(createElement("li", "", step));
  details.append(steps);
  details.append(createElement("p", "allergen-line", formatAllergens(recipe)));

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggleText.textContent = isExpanded ? "View recipe" : "Hide recipe";
    toggleIcon.textContent = isExpanded ? "+" : "−";
    details.hidden = isExpanded;
  });

  content.append(toggle, details);
  card.append(artWrap, content);
  return card;
}

function renderResults() {
  const matches = getMatches();
  const dislikedIngredients = selectedValues("dislikedIngredients");
  const excludedAllergens = selectedValues("allergens");
  resultsElement.replaceChildren();

  if (!matches.length) {
    resultsCount.textContent = "No matches";
    const empty = createElement("div", "empty-card");
    const icon = createElement("span", "empty-icon", "⌕");
    icon.setAttribute("aria-hidden", "true");
    empty.append(
      icon,
      createElement("p", "eyebrow", "LET’S TRY AGAIN"),
      createElement("h3", "", "No recipes quite fit."),
      createElement("p", "", "Try a different cuisine or nutrition preference, or adjust your calorie target. We’ll always respect your selected allergy exclusions."),
    );
    resultsElement.append(empty);
    return;
  }

  resultsCount.textContent = `${matches.length} ${matches.length === 1 ? "idea" : "ideas"} · within 300 kcal`;
  for (const recipe of matches) {
    resultsElement.append(createRecipeCard(recipe, dislikedIngredients, excludedAllergens));
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  renderResults();
});

populateFilters();
