export const recipes = [
  {
    id: "1",
    name: "Quinoa Power Bowl with Roasted Emerald Veggies",
    description: "A nutrient-dense, filling bowl packed with plant-based protein and vibrant flavors.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    sideImages: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400"
    ],
    kcal: 450,
    prepTime: "15m",
    cookTime: "25m",
    serves: 2,
    difficulty: "Medium",
    tags: ["Vegan", "Gluten-Free", "High Protein"],
    ingredients: [
      { category: "BASE & VEGGIES", items: ["1 cup Quinoa, rinsed", "2 cups Broccoli florets", "1 large Sweet Potato, cubed", "1/2 Red Onion, sliced"] },
      { category: "DRESSING", items: ["2 tbsp Olive Oil", "1 tbsp Lemon Juice"] }
    ],
    nutrition: {
      perServing: "1 Bowl",
      calories: 450,
      protein: 16,
      carbs: 65,
      fat: 14,
      vitamins: [
        { name: "Vitamin C", value: "120% DV" },
        { name: "Iron", value: "25% DV" },
        { name: "Fiber", value: "12g" }
      ]
    },
    instructions: [
      { step: 1, title: "Preheat and Prep", description: "Preheat your oven to 400°F (200°C). Line a large baking sheet with parchment paper. Thoroughly rinse the quinoa under cold water until the water runs clear." },
      { step: 2, title: "Cook Quinoa", description: "In a medium saucepan, bring 2 cups of water to a boil. Add the rinsed quinoa, reduce heat to low, cover, and simmer for 15 minutes or until the water is absorbed. Fluff with a fork and set aside." },
      { step: 3, title: "Roast Vegetables", description: "Toss the broccoli florets, cubed sweet potato, and sliced red onion with 1 tbsp olive oil, salt, and pepper. Spread evenly on the prepared baking sheet. Roast for 20-25 minutes until tender and slightly caramelized at the edges." },
      { step: 4, title: "Assemble", description: "Divide the cooked quinoa between two bowls. Top with the roasted vegetables. Drizzle with the remaining olive oil and lemon juice. Serve immediately." }
    ]
  },
  {
    id: "2",
    name: "Avocado Toast & Eggs",
    description: "Classic healthy breakfast with sourdough, creamy avocado, and poached eggs.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    sideImages: [
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=400"
    ],
    kcal: 420,
    prepTime: "5m",
    cookTime: "5m",
    serves: 1,
    difficulty: "Easy",
    tags: ["Quick & Easy", "Vegetarian", "High Protein"],
    ingredients: [
      { category: "BASE", items: ["2 slices Sourdough Bread", "1 ripe Avocado", "1/2 tsp Lemon Juice", "Pinch of Red Pepper Flakes", "Salt and Pepper"] },
      { category: "EGGS", items: ["2 large Eggs", "1 tsp Vinegar", "Water for poaching"] }
    ],
    nutrition: {
      perServing: "1 Plate",
      calories: 420,
      protein: 18,
      carbs: 32,
      fat: 24,
      vitamins: [
        { name: "Vitamin E", value: "20% DV" },
        { name: "Folate", value: "30% DV" },
        { name: "Dietary Fiber", value: "8g" }
      ]
    },
    instructions: [
      { step: 1, title: "Toast & Prep Avocado", description: "Toast the sourdough bread slices to your desired crispness. In a small bowl, mash the avocado with lemon juice, salt, pepper, and red pepper flakes." },
      { step: 2, title: "Poach the Eggs", description: "Bring a pot of water to a gentle simmer. Add a splash of vinegar. Swirl the water to create a whirlpool, slide in the eggs one by one, and poach for 3 minutes." },
      { step: 3, title: "Spread Avocado", description: "Spread the mashed avocado mixture evenly over both slices of toasted sourdough." },
      { step: 4, title: "Assemble and Serve", description: "Carefully place the poached eggs on top of the avocado toast. Season with fresh ground pepper and microgreens if desired. Serve warm." }
    ]
  },
  {
    id: "3",
    name: "Grilled Chicken Salad",
    description: "Fresh mediterranean style salad with lean grilled chicken breast.",
    image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&q=80&w=800",
    sideImages: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400"
    ],
    kcal: 380,
    prepTime: "10m",
    cookTime: "15m",
    serves: 2,
    difficulty: "Medium",
    tags: ["High Protein", "Keto", "Low Carb"],
    ingredients: [
      { category: "CHICKEN", items: ["2 Chicken Breasts (boneless)", "1 tbsp Olive Oil", "1 tsp Dried Oregano", "1 clove Garlic, minced", "Salt and Pepper"] },
      { category: "SALAD BASE", items: ["4 cups Romaine Lettuce, chopped", "1 cup Cherry Tomatoes, halved", "1 Cucumber, sliced", "1/4 cup Kalamata Olives", "1/4 cup Feta Cheese"] },
      { category: "DRESSING", items: ["3 tbsp Olive Oil", "1 tbsp Red Wine Vinegar", "1 tsp Dijon Mustard", "Salt and Pepper"] }
    ],
    nutrition: {
      perServing: "1 Large Bowl",
      calories: 380,
      protein: 38,
      carbs: 8,
      fat: 22,
      vitamins: [
        { name: "Vitamin A", value: "85% DV" },
        { name: "Vitamin C", value: "45% DV" },
        { name: "Iron", value: "15% DV" }
      ]
    },
    instructions: [
      { step: 1, title: "Marinate Chicken", description: "Toss the chicken breasts with olive oil, minced garlic, oregano, salt, and pepper in a bowl. Let sit for 10 minutes." },
      { step: 2, title: "Grill Chicken", description: "Heat a grill pan or outdoor grill to medium-high. Grill chicken for 6-7 minutes per side until the internal temperature reaches 165°F (74°C)." },
      { step: 3, title: "Prepare Vegetables", description: "Chop the romaine lettuce, halve the cherry tomatoes, slice the cucumber, and place them in a large salad bowl." },
      { step: 4, title: "Dress and Toss", description: "Whisk dressing ingredients. Slice the grilled chicken, place on top of the greens, sprinkle feta and olives, drizzle with dressing, and toss." }
    ]
  },
  {
    id: "4",
    name: "Berry Protein Smoothie",
    description: "Refreshing antioxidant-rich smoothie with whey protein.",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=800",
    sideImages: [
      "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
    ],
    kcal: 290,
    prepTime: "5m",
    cookTime: "0m",
    serves: 1,
    difficulty: "Easy",
    tags: ["Quick & Easy", "Vegetarian", "High Protein"],
    ingredients: [
      { category: "SMOOTHIE BASE", items: ["1 scoop Whey Protein Powder (Vanilla)", "1/2 cup Frozen Blueberries", "1/2 cup Frozen Strawberries", "1 cup Unsweetened Almond Milk", "1/2 cup Greek Yogurt"] },
      { category: "OPTIONAL BOOST", items: ["1 tbsp Chia Seeds", "1 tsp Honey (optional)"] }
    ],
    nutrition: {
      perServing: "1 Large Glass",
      calories: 290,
      protein: 26,
      carbs: 28,
      fat: 6,
      vitamins: [
        { name: "Calcium", value: "35% DV" },
        { name: "Vitamin C", value: "70% DV" },
        { name: "Antioxidants", value: "Very High" }
      ]
    },
    instructions: [
      { step: 1, title: "Add Liquids First", description: "Pour the almond milk into the blender first to prevent the protein powder from sticking to the bottom." },
      { step: 2, title: "Add Proteins & Base", description: "Add the vanilla protein powder and greek yogurt to the blender." },
      { step: 3, title: "Add Berries & Seeds", description: "Add the frozen strawberries, blueberries, chia seeds, and optional honey to the mix." },
      { step: 4, title: "Blend and Serve", description: "Blend on high speed for 45-60 seconds until perfectly smooth and creamy. Pour into a tall glass and enjoy immediately." }
    ]
  },
  {
    id: "5",
    name: "Zucchini Noodles with Pesto",
    description: "Low-carb pasta alternative with homemade basil pesto.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    kcal: 310,
    prepTime: "10m",
    cookTime: "5m",
    serves: 2,
    difficulty: "Easy",
    tags: ["Vegan", "Keto", "Low Carb"],
    ingredients: [
      { category: "BASE", items: ["2 large Zucchinis, spiralized", "1 tbsp Olive Oil"] },
      { category: "PESTO", items: ["2 cups Fresh Basil", "1/4 cup Pine Nuts", "1/2 cup Parmesan", "1/3 cup Olive Oil", "2 cloves Garlic"] }
    ],
    nutrition: { 
      perServing: "1 Bowl", calories: 310, protein: 5, carbs: 10, fat: 25, 
      vitamins: [{ name: "Vitamin A", value: "30% DV" }, { name: "Vitamin C", value: "45% DV" }] 
    },
    instructions: [
      { step: 1, title: "Make Pesto", description: "Blend basil, pine nuts, parmesan, and garlic in a food processor. Slowly drizzle in olive oil until smooth." },
      { step: 2, title: "Spiralize Zucchini", description: "Use a spiralizer to cut the zucchinis into long noodles. Pat dry with a paper towel." },
      { step: 3, title: "Cook Noodles", description: "Heat 1 tbsp olive oil in a large skillet over medium heat. Add zucchini noodles and sauté for 2-3 minutes until just tender." },
      { step: 4, title: "Toss and Serve", description: "Remove from heat, toss with the pesto sauce, and serve immediately with extra parmesan." }
    ]
  },
  {
    id: "6",
    name: "Honey Garlic Salmon",
    description: "Flaky salmon glazed in a sweet and savory honey garlic sauce.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    kcal: 480,
    prepTime: "5m",
    cookTime: "15m",
    serves: 2,
    difficulty: "Medium",
    tags: ["High Protein", "Pescatarian"],
    ingredients: [
      { category: "MAIN", items: ["2 Salmon Fillets (6oz each)", "Salt and Pepper to taste", "1 tbsp Olive Oil"] },
      { category: "GLAZE", items: ["3 cloves Garlic, minced", "1/3 cup Honey", "1/4 cup Soy Sauce", "1 tbsp Lemon Juice"] }
    ],
    nutrition: { 
      perServing: "1 Fillet", calories: 480, protein: 42, carbs: 15, fat: 28, 
      vitamins: [{ name: "Vitamin D", value: "110% DV" }, { name: "Vitamin B12", value: "80% DV" }] 
    },
    instructions: [
      { step: 1, title: "Prep Salmon", description: "Pat salmon fillets dry with a paper towel. Season generously with salt and pepper." },
      { step: 2, title: "Make Glaze", description: "In a small bowl, whisk together minced garlic, honey, soy sauce, and lemon juice." },
      { step: 3, title: "Sear Salmon", description: "Heat olive oil in a skillet over medium-high heat. Sear salmon skin-side up for 3-4 minutes until golden." },
      { step: 4, title: "Glaze and Finish", description: "Flip the salmon, pour the glaze into the skillet, and cook for another 3-4 minutes, basting the salmon until cooked through and the sauce thickens." }
    ]
  },
  {
    id: "7",
    name: "Mediterranean Chickpea Salad",
    description: "A refreshing blend of chickpeas, cucumbers, tomatoes, and feta.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    kcal: 320,
    prepTime: "10m",
    cookTime: "0m",
    serves: 4,
    difficulty: "Easy",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: [
      { category: "SALAD", items: ["1 can Chickpeas, rinsed", "1 Cucumber, diced", "1 cup Cherry Tomatoes, halved", "1/2 Red Onion, finely chopped", "1/2 cup Feta Cheese"] },
      { category: "DRESSING", items: ["3 tbsp Olive Oil", "2 tbsp Lemon Juice", "1 tsp Dried Oregano", "Salt and Pepper"] }
    ],
    nutrition: { 
      perServing: "1 Bowl", calories: 320, protein: 12, carbs: 45, fat: 10, 
      vitamins: [{ name: "Vitamin C", value: "25% DV" }, { name: "Iron", value: "15% DV" }] 
    },
    instructions: [
      { step: 1, title: "Prep Veggies", description: "Dice the cucumber, halve the cherry tomatoes, and finely chop the red onion." },
      { step: 2, title: "Make Dressing", description: "In a small bowl, whisk together olive oil, lemon juice, dried oregano, salt, and pepper." },
      { step: 3, title: "Combine Ingredients", description: "In a large mixing bowl, combine the rinsed chickpeas, cucumber, tomatoes, and onion." },
      { step: 4, title: "Dress and Chill", description: "Pour the dressing over the salad, toss gently to coat, and fold in the feta cheese. Chill for 15 minutes before serving." }
    ]
  },
  {
    id: "8",
    name: "Sweet Potato Buddha Bowl",
    description: "Roasted sweet potatoes, greens, and tahini dressing.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    kcal: 410,
    prepTime: "10m",
    cookTime: "25m",
    serves: 2,
    difficulty: "Medium",
    tags: ["Gluten-Free", "Vegan"],
    ingredients: [
      { category: "BASE", items: ["1 Sweet Potato, cubed", "1 cup Quinoa, cooked", "2 cups Kale or Spinach"] },
      { category: "TOPPINGS", items: ["1/2 Avocado, sliced", "2 tbsp Pumpkin Seeds", "1/4 cup Tahini Dressing"] }
    ],
    nutrition: { 
      perServing: "1 Bowl", calories: 410, protein: 10, carbs: 60, fat: 15, 
      vitamins: [{ name: "Vitamin A", value: "200% DV" }, { name: "Potassium", value: "15% DV" }] 
    },
    instructions: [
      { step: 1, title: "Roast Sweet Potato", description: "Toss sweet potato cubes in olive oil and roast at 400°F for 25 minutes until tender." },
      { step: 2, title: "Prepare Greens", description: "Massage the kale with a tiny bit of olive oil and salt until softened." },
      { step: 3, title: "Assemble Bowl", description: "In a bowl, arrange the cooked quinoa, massaged greens, and roasted sweet potatoes." },
      { step: 4, title: "Add Toppings", description: "Top with sliced avocado, sprinkle with pumpkin seeds, and drizzle generously with tahini dressing." }
    ]
  },
  {
    id: "9",
    name: "Berry Acai Smoothie Bowl",
    description: "Antioxidant-packed acai blended with mixed berries.",
    image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
    kcal: 250,
    prepTime: "5m",
    cookTime: "0m",
    serves: 1,
    difficulty: "Easy",
    tags: ["Quick & Easy", "Vegan"],
    ingredients: [
      { category: "SMOOTHIE", items: ["1 frozen Acai Packet", "1/2 frozen Banana", "1/2 cup Mixed Berries", "1/2 cup Almond Milk"] },
      { category: "TOPPINGS", items: ["1/4 cup Granola", "1 tbsp Chia Seeds", "Fresh Strawberries"] }
    ],
    nutrition: { 
      perServing: "1 Bowl", calories: 250, protein: 4, carbs: 45, fat: 5, 
      vitamins: [{ name: "Vitamin C", value: "60% DV" }, { name: "Antioxidants", value: "High" }] 
    },
    instructions: [
      { step: 1, title: "Blend Base", description: "Add the frozen acai packet, banana, mixed berries, and almond milk to a high-speed blender." },
      { step: 2, title: "Blend Until Smooth", description: "Blend on high until completely smooth and thick. You may need to use a tamper or scrape down the sides." },
      { step: 3, title: "Pour into Bowl", description: "Scoop the thick smoothie mixture into a serving bowl." },
      { step: 4, title: "Decorate", description: "Top with granola, chia seeds, and neatly arranged fresh strawberries." }
    ]
  },
  {
    id: "10",
    name: "Steak & Asparagus Skillet",
    description: "Juicy steak bites pan-seared with tender asparagus spears.",
    image: "https://images.unsplash.com/photo-1544025162-8111f4a761e2?auto=format&fit=crop&q=80&w=800",
    kcal: 550,
    prepTime: "10m",
    cookTime: "15m",
    serves: 2,
    difficulty: "Medium",
    tags: ["Keto", "High Protein"],
    ingredients: [
      { category: "MAIN", items: ["1 lb Sirloin Steak, cut into bite-sized pieces", "1 bunch Asparagus, trimmed and cut into 2-inch pieces"] },
      { category: "SEASONING", items: ["2 tbsp Butter", "3 cloves Garlic, minced", "1 tsp Soy Sauce", "Salt and Pepper"] }
    ],
    nutrition: { 
      perServing: "1 Plate", calories: 550, protein: 45, carbs: 8, fat: 38, 
      vitamins: [{ name: "Iron", value: "35% DV" }, { name: "Zinc", value: "40% DV" }] 
    },
    instructions: [
      { step: 1, title: "Prep Ingredients", description: "Cut the steak into cubes and season well with salt and pepper. Trim and chop the asparagus." },
      { step: 2, title: "Sear Steak", description: "Melt 1 tbsp butter in a large skillet over high heat. Sear the steak bites for 1-2 minutes per side until browned. Remove from skillet." },
      { step: 3, title: "Cook Asparagus", description: "Lower heat to medium, add the remaining butter, minced garlic, and asparagus. Sauté for 4-5 minutes until tender-crisp." },
      { step: 4, title: "Combine and Serve", description: "Return the steak bites to the skillet, add soy sauce, and toss everything together for 1 minute before serving." }
    ]
  },
  {
    id: "11",
    name: "Classic Beef Burger",
    description: "A simple, juicy beef burger with cheese and fresh veggies.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    kcal: 600,
    prepTime: "10m",
    cookTime: "10m",
    serves: 2,
    difficulty: "Easy",
    tags: ["High Protein", "Quick & Easy"],
    ingredients: [
      { category: "BURGER", items: ["2 Beef Patties", "2 Burger Buns", "2 slices Cheddar Cheese"] },
      { category: "TOPPINGS", items: ["1 Tomato, sliced", "1 cup Lettuce", "2 tbsp Ketchup"] }
    ],
    nutrition: { 
      perServing: "1 Burger", calories: 600, protein: 30, carbs: 40, fat: 35, 
      vitamins: [{ name: "Iron", value: "25% DV" }] 
    },
    instructions: [
      { step: 1, title: "Cook Meat", description: "Put a pan on the stove on high heat. Cook the beef patties for 4 minutes on each side." },
      { step: 2, title: "Melt Cheese", description: "Put one slice of cheese on each beef patty. Wait 1 minute for the cheese to melt." },
      { step: 3, title: "Toast Bread", description: "Put the burger buns in a toaster or warm pan until they are light brown." },
      { step: 4, title: "Build Burger", description: "Put the meat on the bottom bun. Add lettuce, tomato, and ketchup. Put the top bun on." }
    ]
  },
  {
    id: "12",
    name: "Chicken Fried Rice",
    description: "Easy and fast fried rice with chicken and mixed vegetables.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
    kcal: 450,
    prepTime: "10m",
    cookTime: "15m",
    serves: 2,
    difficulty: "Easy",
    tags: ["High Protein", "Quick & Easy"],
    ingredients: [
      { category: "BASE", items: ["2 cups Cooked Rice", "1 Chicken Breast, cut small", "2 Eggs"] },
      { category: "VEGGIES & SAUCE", items: ["1 cup Mixed Peas and Carrots", "3 tbsp Soy Sauce", "1 tbsp Oil"] }
    ],
    nutrition: { 
      perServing: "1 Bowl", calories: 450, protein: 28, carbs: 55, fat: 12, 
      vitamins: [{ name: "Vitamin A", value: "40% DV" }] 
    },
    instructions: [
      { step: 1, title: "Cook Chicken", description: "Put oil in a big pan. Cook the chicken pieces until they are white inside." },
      { step: 2, title: "Cook Eggs", description: "Push the chicken to the side of the pan. Break the eggs in the pan and mix them until cooked." },
      { step: 3, title: "Add Veggies", description: "Put the peas and carrots into the pan. Mix everything together for 2 minutes." },
      { step: 4, title: "Add Rice", description: "Put the cooked rice and soy sauce in the pan. Mix well and cook until hot." }
    ]
  },
  {
    id: "13",
    name: "Fluffy Pancakes",
    description: "Sweet and soft pancakes served with butter and syrup.",
    image: "https://images.unsplash.com/photo-1528207776546-384111d0fc08?auto=format&fit=crop&q=80&w=800",
    kcal: 350,
    prepTime: "5m",
    cookTime: "10m",
    serves: 3,
    difficulty: "Easy",
    tags: ["Breakfast", "Vegetarian"],
    ingredients: [
      { category: "BATTER", items: ["1 cup Flour", "1 cup Milk", "1 Egg", "2 tbsp Sugar"] },
      { category: "TOPPINGS", items: ["1 tbsp Butter", "3 tbsp Maple Syrup"] }
    ],
    nutrition: { 
      perServing: "3 Pancakes", calories: 350, protein: 10, carbs: 60, fat: 8, 
      vitamins: [{ name: "Calcium", value: "20% DV" }] 
    },
    instructions: [
      { step: 1, title: "Mix Ingredients", description: "Put flour, milk, egg, and sugar in a big bowl. Mix them together until smooth." },
      { step: 2, title: "Heat Pan", description: "Put a flat pan on the stove on medium heat. Put a little bit of butter on the pan." },
      { step: 3, title: "Cook Pancakes", description: "Pour some mix onto the pan. Wait until you see bubbles, then flip it over. Cook for 1 more minute." },
      { step: 4, title: "Serve", description: "Put the pancakes on a plate. Add butter on top and pour syrup over them." }
    ]
  },
  {
    id: "14",
    name: "Tomato Basil Pasta",
    description: "A fast pasta dish with a simple, fresh tomato sauce.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    kcal: 400,
    prepTime: "5m",
    cookTime: "15m",
    serves: 2,
    difficulty: "Easy",
    tags: ["Vegan", "Quick & Easy"],
    ingredients: [
      { category: "PASTA", items: ["8 oz Spaghetti", "Water for boiling"] },
      { category: "SAUCE", items: ["2 cups Tomato Sauce", "10 Fresh Basil Leaves", "1 tbsp Olive Oil"] }
    ],
    nutrition: { 
      perServing: "1 Plate", calories: 400, protein: 12, carbs: 70, fat: 8, 
      vitamins: [{ name: "Vitamin C", value: "30% DV" }] 
    },
    instructions: [
      { step: 1, title: "Boil Water", description: "Put a big pot of water on the stove. Turn the heat to high and wait for it to boil." },
      { step: 2, title: "Cook Pasta", description: "Put the spaghetti in the boiling water. Cook for 10 minutes, then take the water out." },
      { step: 3, title: "Warm Sauce", description: "Put the tomato sauce and olive oil in a small pan. Heat it for 5 minutes." },
      { step: 4, title: "Mix and Eat", description: "Put the pasta on a plate. Pour the warm sauce on top. Put basil leaves on top of the sauce." }
    ]
  }
];


export const userProgress = {
  kcalEaten: 1450,
  kcalGoal: 2000,
  kcalBurned: 320,
  macros: {
    protein: { current: 85, goal: 120 },
    carbs: { current: 150, goal: 220 },
    fat: { current: 45, goal: 65 }
  },
  recentMeals: [
    { id: "m1", name: "Avocado Toast & Eggs", type: "Breakfast", kcal: 420, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=10&w=100" },
    { id: "m2", name: "Grilled Chicken Salad", type: "Lunch", kcal: 380, image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&q=10&w=100" }
  ]
};

export const userProfile = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  dietaryPreferences: ["Vegan", "Gluten-Free"],
  allergies: ["Peanuts", "Shellfish"]
};
