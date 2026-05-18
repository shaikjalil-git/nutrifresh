const fs = require('fs');

const breakfastTemplates = [
  {
    name: "Berry Almond Protein Oats",
    description: "Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
    prepTime: "5m", cookTime: "5m", kcal: 340, serves: 1, difficulty: "Easy",
    ingredients: [
      { category: "BASE", items: ["1/2 cup Rolled Oats", "1 cup Unsweetened Almond Milk", "1 scoop Vanilla Protein Powder"] },
      { category: "TOPPINGS", items: ["1/4 cup Fresh Blueberries", "1 tbsp Almond slices", "1 tsp Maple syrup"] }
    ],
    nutrition: { perServing: "1 Bowl", calories: 340, protein: 26, carbs: 42, fat: 8, vitamins: [{ name: "Iron", value: "15% DV" }, { name: "Fiber", value: "8g" }] },
    instructions: [
      { step: 1, title: "Simmer Oats", description: "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally." },
      { step: 2, title: "Whisk Protein", description: "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth." },
      { step: 3, title: "Serve & Top", description: "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup." }
    ]
  },
  {
    name: "Spinach & Feta Egg Scramble",
    description: "Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
    prepTime: "3m", cookTime: "5m", kcal: 280, serves: 1, difficulty: "Easy",
    ingredients: [
      { category: "EGGS", items: ["3 large Eggs", "1 tbsp unsweetened almond milk", "1/2 cup Fresh Spinach", "Salt and pepper"] },
      { category: "CHEESE & SEARING", items: ["2 tbsp Crumbled Feta Cheese", "1 tsp Butter or olive oil"] }
    ],
    nutrition: { perServing: "1 Plate", calories: 280, protein: 22, carbs: 3, fat: 20, vitamins: [{ name: "Vitamin A", value: "45% DV" }, { name: "Calcium", value: "15% DV" }] },
    instructions: [
      { step: 1, title: "Whisk Eggs", description: "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly." },
      { step: 2, title: "Sauté Spinach", description: "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted." },
      { step: 3, title: "Scramble & Cheese", description: "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving." }
    ]
  },
  {
    name: "Classic Avocado Sourdough Toast",
    description: "Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
    prepTime: "5m", cookTime: "2m", kcal: 310, serves: 1, difficulty: "Easy",
    ingredients: [
      { category: "TOAST", items: ["1 thick slice Sourdough Bread", "1/2 ripe Avocado", "1 tsp Lemon Juice"] },
      { category: "SEASONING", items: ["1/2 tsp Chili Flakes", "Coarse Sea Salt", "Freshly cracked Pepper"] }
    ],
    nutrition: { perServing: "1 Slice", calories: 310, protein: 7, carbs: 34, fat: 17, vitamins: [{ name: "Vitamin E", value: "15% DV" }, { name: "Fiber", value: "6g" }] },
    instructions: [
      { step: 1, title: "Toast Bread", description: "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides." },
      { step: 2, title: "Mash Avocado", description: "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl." },
      { step: 3, title: "Spread and Season", description: "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes." }
    ]
  },
  {
    name: "Greek Yogurt & Chia Parfait",
    description: "Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
    prepTime: "5m", cookTime: "0m", kcal: 260, serves: 1, difficulty: "Easy",
    ingredients: [
      { category: "BASE", items: ["1 cup Plain Greek Yogurt", "1 tbsp Chia Seeds", "1 tsp organic Honey"] },
      { category: "TOPPINGS", items: ["4 Fresh Strawberries, sliced", "2 tbsp Pumpkin seeds"] }
    ],
    nutrition: { perServing: "1 Jar", calories: 260, protein: 20, carbs: 22, fat: 10, vitamins: [{ name: "Calcium", value: "25% DV" }, { name: "Vitamin C", value: "35% DV" }] },
    instructions: [
      { step: 1, title: "Mix Seeds", description: "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken." },
      { step: 2, title: "Sweeten", description: "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently." },
      { step: 3, title: "Layer Strawberries", description: "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait." }
    ]
  }
];

const veganTemplates = [
  {
    name: "Crispy Sesame Tofu Bowl",
    description: "Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
    prepTime: "10m", cookTime: "15m", kcal: 460, serves: 2, difficulty: "Medium",
    ingredients: [
      { category: "TOFU", items: ["1 block Extra Firm Tofu, pressed and cubed", "1 tbsp Cornstarch", "1 tbsp Sesame Oil"] },
      { category: "GLAZE & BASE", items: ["2 tbsp Soy Sauce", "1 tbsp Maple Syrup", "1 cup Cooked Brown Rice", "1 cup Broccoli florets"] }
    ],
    nutrition: { perServing: "1 Bowl", calories: 460, protein: 18, carbs: 54, fat: 16, vitamins: [{ name: "Iron", value: "20% DV" }, { name: "Calcium", value: "15% DV" }] },
    instructions: [
      { step: 1, title: "Coat Tofu", description: "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated." },
      { step: 2, title: "Crisp Tofu", description: "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides." },
      { step: 3, title: "Glaze & Assemble", description: "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli." }
    ]
  },
  {
    name: "Mediterranean Chickpea Salad",
    description: "Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
    prepTime: "8m", cookTime: "0m", kcal: 320, serves: 2, difficulty: "Easy",
    ingredients: [
      { category: "SALAD", items: ["1 can Chickpeas, drained and rinsed", "1 Cucumber, diced", "1 cup Cherry Tomatoes, halved", "1/4 cup Red Onion, chopped"] },
      { category: "DRESSING", items: ["2 tbsp Extra Virgin Olive Oil", "1 tbsp Lemon Juice", "1 tsp Dried Oregano", "Salt and pepper"] }
    ],
    nutrition: { perServing: "1 Plate", calories: 320, protein: 11, carbs: 38, fat: 14, vitamins: [{ name: "Vitamin C", value: "30% DV" }, { name: "Fiber", value: "9g" }] },
    instructions: [
      { step: 1, title: "Chop Veggies", description: "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion." },
      { step: 2, title: "Rinse Chickpeas", description: "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander." },
      { step: 3, title: "Combine and Dress", description: "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano." }
    ]
  },
  {
    name: "Creamy Cashew Broccoli Skillet",
    description: "Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
    prepTime: "10m", cookTime: "8m", kcal: 380, serves: 2, difficulty: "Medium",
    ingredients: [
      { category: "BASE", items: ["3 cups Broccoli florets", "1 tbsp Olive Oil", "2 cloves Garlic, minced"] },
      { category: "CASHEW CREAM", items: ["1/2 cup Raw Cashews, soaked in hot water", "1/4 cup Water", "1 tbsp Nutritional Yeast", "1/2 tsp Salt"] }
    ],
    nutrition: { perServing: "1 Bowl", calories: 380, protein: 12, carbs: 22, fat: 28, vitamins: [{ name: "Vitamin C", value: "150% DV" }, { name: "Fiber", value: "6g" }] },
    instructions: [
      { step: 1, title: "Blend Cream", description: "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy." },
      { step: 2, title: "Sauté Broccoli", description: "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp." },
      { step: 3, title: "Simmer Sauce", description: "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly." }
    ]
  }
];

const proteinTemplates = [
  {
    name: "Grilled Garlic-Herb Steak Bites",
    description: "Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
    prepTime: "5m", cookTime: "8m", kcal: 540, serves: 2, difficulty: "Medium",
    ingredients: [
      { category: "STEAK", items: ["1 lb Sirloin Steak, cut into 1-inch cubes", "Salt and Black Pepper", "1 tbsp Avocado oil"] },
      { category: "GARLIC HERB", items: ["2 tbsp Butter", "3 cloves Garlic, minced", "1 stem fresh Rosemary", "1 stem fresh Thyme"] }
    ],
    nutrition: { perServing: "1 Plate", calories: 540, protein: 46, carbs: 1, fat: 38, vitamins: [{ name: "Iron", value: "35% DV" }, { name: "Zinc", value: "45% DV" }] },
    instructions: [
      { step: 1, title: "Season Steak", description: "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper." },
      { step: 2, title: "Sear Meat", description: "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned." },
      { step: 3, title: "Baste Herb Butter", description: "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes." }
    ]
  },
  {
    name: "Baked Honey Garlic Salmon Fillet",
    description: "Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
    prepTime: "5m", cookTime: "12m", kcal: 480, serves: 1, difficulty: "Easy",
    ingredients: [
      { category: "SALMON", items: ["1 Wild Salmon Fillet (6oz)", "1/2 tsp Lemon juice", "Salt and pepper"] },
      { category: "GLAZE", items: ["1 tbsp Honey", "2 cloves Garlic, minced", "1 tbsp Soy Sauce"] }
    ],
    nutrition: { perServing: "1 Fillet", calories: 480, protein: 38, carbs: 12, fat: 26, vitamins: [{ name: "Vitamin D", value: "120% DV" }, { name: "B12", value: "85% DV" }] },
    instructions: [
      { step: 1, title: "Preheat Oven", description: "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray." },
      { step: 2, title: "Glaze Salmon", description: "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet." },
      { step: 3, title: "Bake through", description: "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork." }
    ]
  },
  {
    name: "Lemon Herb Grilled Chicken Breast",
    description: "Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
    prepTime: "10m", cookTime: "12m", kcal: 320, serves: 1, difficulty: "Easy",
    ingredients: [
      { category: "CHICKEN", items: ["1 boneless Chicken Breast (7oz)", "1 tbsp Olive Oil", "Salt and pepper"] },
      { category: "MARINADE", items: ["1 tbsp Lemon juice", "1 tsp Dried Oregano", "1 clove Garlic, minced"] }
    ],
    nutrition: { perServing: "1 Breast", calories: 320, protein: 42, carbs: 2, fat: 12, vitamins: [{ name: "Niacin", value: "80% DV" }, { name: "Selenium", value: "60% DV" }] },
    instructions: [
      { step: 1, title: "Marinate Chicken", description: "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes." },
      { step: 2, title: "Grill Breast", description: "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through." },
      { step: 3, title: "Rest & Slice", description: "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice." }
    ]
  }
];

const ketoTemplates = [
  {
    name: "Creamy Keto Garlic Butter Shrimp",
    description: "Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
    prepTime: "5m", cookTime: "6m", kcal: 420, serves: 2, difficulty: "Easy",
    ingredients: [
      { category: "SHRIMP", items: ["1/2 lb Peeled Shrimp", "1 tbsp Avocado oil", "Salt and black pepper"] },
      { category: "GARLIC BUTTER", items: ["2 tbsp Grass-fed Butter", "3 cloves Garlic, minced", "1/4 cup Heavy Cream", "1 tbsp fresh Parsley"] }
    ],
    nutrition: { perServing: "1 Bowl", calories: 420, protein: 24, carbs: 3, fat: 34, vitamins: [{ name: "B12", value: "60% DV" }, { name: "Selenium", value: "50% DV" }] },
    instructions: [
      { step: 1, title: "Sear Shrimp", description: "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside." },
      { step: 2, title: "Make Sauce", description: "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken." },
      { step: 3, title: "Toss & Serve", description: "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley." }
    ]
  },
  {
    name: "Classic Zucchini Pesto Noodles",
    description: "Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
    prepTime: "10m", cookTime: "3m", kcal: 310, serves: 2, difficulty: "Easy",
    ingredients: [
      { category: "NOODLES", items: ["2 large fresh Zucchinis", "1 tbsp Olive Oil"] },
      { category: "PESTO & CHEESE", items: ["3 tbsp Basil Pesto", "2 tbsp Grated Parmesan Cheese", "Salt and pepper"] }
    ],
    nutrition: { perServing: "1 Bowl", calories: 310, protein: 6, carbs: 8, fat: 29, vitamins: [{ name: "Vitamin A", value: "35% DV" }, { name: "C", value: "40% DV" }] },
    instructions: [
      { step: 1, title: "Spiralize Zucchini", description: "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels." },
      { step: 2, title: "Sauté Noodles", description: "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm." },
      { step: 3, title: "Dress Pesto", description: "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese." }
    ]
  },
  {
    name: "Bacon & Cheddar Egg Muffins",
    description: "Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
    prepTime: "5m", cookTime: "15m", kcal: 290, serves: 3, difficulty: "Easy",
    ingredients: [
      { category: "BASE", items: ["6 large Eggs", "2 tbsp Heavy Cream", "Salt and black pepper"] },
      { category: "FILLINGS", items: ["4 slices Bacon, cooked and crumbled", "1/2 cup Shredded Cheddar Cheese"] }
    ],
    nutrition: { perServing: "2 Muffins", calories: 290, protein: 18, carbs: 2, fat: 22, vitamins: [{ name: "B12", value: "30% DV" }, { name: "Vitamin D", value: "15% DV" }] },
    instructions: [
      { step: 1, title: "Preheat Oven", description: "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter." },
      { step: 2, title: "Whisk Base", description: "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended." },
      { step: 3, title: "Assemble & Bake", description: "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes." }
    ]
  }
];

const generateRecipes = () => {
  const recipesList = [];
  let idCounter = 15;

  const images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800"
  ];

  const sideImages = [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ];

  const categories = [
    { name: "Breakfast", tags: ["Breakfast", "Quick & Easy"], count: 42, templates: breakfastTemplates },
    { name: "Vegan", tags: ["Vegan", "Gluten-Free"], count: 42, templates: veganTemplates },
    { name: "High Protein", tags: ["High Protein", "Low Carb"], count: 42, templates: proteinTemplates },
    { name: "Keto", tags: ["Keto", "High Fat", "Low Carb"], count: 42, templates: ketoTemplates }
  ];

  categories.forEach(cat => {
    for (let i = 0; i < cat.count; i++) {
      const template = cat.templates[i % cat.templates.length];
      const countIndex = i + 1;
      
      const newRecipe = {
        id: (idCounter++).toString(),
        name: `${template.name} #${countIndex}`,
        description: `Variant #${countIndex}: ${template.description}`,
        image: images[(idCounter + i) % images.length],
        sideImages: [sideImages[i % sideImages.length], sideImages[(i + 1) % sideImages.length]],
        kcal: template.kcal + (i % 5) * 15,
        prepTime: template.prepTime,
        cookTime: template.cookTime,
        serves: template.serves,
        difficulty: template.difficulty,
        tags: [...cat.tags],
        ingredients: template.ingredients.map(ing => ({
          category: ing.category,
          items: ing.items.map(item => `${item}`)
        })),
        nutrition: {
          perServing: template.nutrition.perServing,
          calories: template.nutrition.calories + (i % 5) * 15,
          protein: template.nutrition.protein + (i % 3),
          carbs: template.nutrition.carbs + (i % 2),
          fat: template.nutrition.fat + (i % 3),
          vitamins: [...template.nutrition.vitamins]
        },
        instructions: template.instructions.map(inst => ({
          step: inst.step,
          title: inst.title,
          description: inst.description
        }))
      };

      recipesList.push(newRecipe);
    }
  });

  return recipesList;
};

const run = () => {
  const filePath = './src/lib/data.ts';
  const newRecipes = generateRecipes();
  
  // Read original seed data
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // We want to clear any previously generated massive array but retain the original manual seeds
  // The original manual seeds go from id "1" to "14".
  // Let's reset the array by finding the manual list, truncating, and rewriting.
  const regex = /export const recipes = \[([\s\S]*?)export const userProgress/;
  
  // Let's load the original manual seed file
  const originalSeedPath = './src/lib/data.ts';
  
  // Generate the new massive list containing all the clean, category-specific templates
  const newRecipesString = newRecipes.map(r => JSON.stringify(r, null, 2)).join(',\n  ');
  
  // We will re-read and replace
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Let's extract the manual recipes (id: "1" to "14")
  const splitIndex = content.indexOf('export const recipes = [');
  const splitEnd = content.indexOf('];\n\n\nexport const userProgress');
  
  // Find manual recipes up to id "14"
  // Let's check how many elements we want to keep. The original 14 manual elements are extremely high quality,
  // we keep them at the beginning of the array, then append our 168 category-accurate templates!
  const manualEndPos = content.indexOf('id: "15"');
  let manualStringContent = '';
  
  if (manualEndPos !== -1) {
    // Large list exists, truncate at the start of id 15
    const chunkStart = content.indexOf('export const recipes = [');
    // Let's find the comma block right before id 15
    const searchString = ',\n  {\n    "id": "15"';
    const splitCut = content.indexOf(searchString);
    if (splitCut !== -1) {
      manualStringContent = content.substring(chunkStart + 'export const recipes = ['.length, splitCut);
    } else {
      // Try single quotes fallback
      const searchStringSingle = ",\n  {\n    'id': '15'";
      const splitCutSingle = content.indexOf(searchStringSingle);
      if (splitCutSingle !== -1) {
        manualStringContent = content.substring(chunkStart + 'export const recipes = ['.length, splitCutSingle);
      }
    }
  }
  
  // If we couldn't parse the manual chunk, just use the manual backup from lines 1-414 of original data.ts
  if (!manualStringContent) {
    console.log("Parsing from backup...");
    // Let's re-read and split at line 415
    const lines = content.split('\n');
    manualStringContent = lines.slice(1, 414).join('\n');
  }

  const outputRecipes = 'export const recipes = [\n' + manualStringContent + ',\n  ' + newRecipesString + '\n];\n\n\nexport const userProgress';
  
  let finalFileContent = content.replace(/export const recipes = \[([\s\S]*?)export const userProgress/, outputRecipes);
  
  fs.writeFileSync(filePath, finalFileContent);
  console.log(`Successfully generated and wrote ${newRecipes.length} category-accurate, high-fidelity recipes to data.ts.`);
};

run();
