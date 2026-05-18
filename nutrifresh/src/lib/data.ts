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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mhrjY8z6MwA58cgd4ixqYO7KWmeqA7LbIQ&s",
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
  },
  {
  "id": "15",
  "name": "Berry Almond Protein Oats #1",
  "description": "Variant #1: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 340,
    "protein": 26,
    "carbs": 42,
    "fat": 8,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "16",
  "name": "Spinach & Feta Egg Scramble #2",
  "description": "Variant #2: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 295,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 295,
    "protein": 23,
    "carbs": 4,
    "fat": 21,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "17",
  "name": "Classic Avocado Sourdough Toast #3",
  "description": "Variant #3: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 340,
    "protein": 9,
    "carbs": 34,
    "fat": 19,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "18",
  "name": "Greek Yogurt & Chia Parfait #4",
  "description": "Variant #4: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 305,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 305,
    "protein": 20,
    "carbs": 23,
    "fat": 10,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "19",
  "name": "Berry Almond Protein Oats #5",
  "description": "Variant #5: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 400,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 400,
    "protein": 27,
    "carbs": 42,
    "fat": 9,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "20",
  "name": "Spinach & Feta Egg Scramble #6",
  "description": "Variant #6: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 280,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 280,
    "protein": 24,
    "carbs": 4,
    "fat": 22,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "21",
  "name": "Classic Avocado Sourdough Toast #7",
  "description": "Variant #7: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 325,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 325,
    "protein": 7,
    "carbs": 34,
    "fat": 17,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "22",
  "name": "Greek Yogurt & Chia Parfait #8",
  "description": "Variant #8: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 290,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 290,
    "protein": 21,
    "carbs": 23,
    "fat": 11,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "23",
  "name": "Berry Almond Protein Oats #9",
  "description": "Variant #9: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 385,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 385,
    "protein": 28,
    "carbs": 42,
    "fat": 10,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "24",
  "name": "Spinach & Feta Egg Scramble #10",
  "description": "Variant #10: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 340,
    "protein": 22,
    "carbs": 4,
    "fat": 20,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "25",
  "name": "Classic Avocado Sourdough Toast #11",
  "description": "Variant #11: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 310,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 310,
    "protein": 8,
    "carbs": 34,
    "fat": 18,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "26",
  "name": "Greek Yogurt & Chia Parfait #12",
  "description": "Variant #12: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 275,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 275,
    "protein": 22,
    "carbs": 23,
    "fat": 12,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "27",
  "name": "Berry Almond Protein Oats #13",
  "description": "Variant #13: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 370,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 370,
    "protein": 26,
    "carbs": 42,
    "fat": 8,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "28",
  "name": "Spinach & Feta Egg Scramble #14",
  "description": "Variant #14: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 325,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 325,
    "protein": 23,
    "carbs": 4,
    "fat": 21,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "29",
  "name": "Classic Avocado Sourdough Toast #15",
  "description": "Variant #15: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 370,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 370,
    "protein": 9,
    "carbs": 34,
    "fat": 19,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "30",
  "name": "Greek Yogurt & Chia Parfait #16",
  "description": "Variant #16: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 260,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 260,
    "protein": 20,
    "carbs": 23,
    "fat": 10,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "31",
  "name": "Berry Almond Protein Oats #17",
  "description": "Variant #17: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 355,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 355,
    "protein": 27,
    "carbs": 42,
    "fat": 9,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "32",
  "name": "Spinach & Feta Egg Scramble #18",
  "description": "Variant #18: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 310,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 310,
    "protein": 24,
    "carbs": 4,
    "fat": 22,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "33",
  "name": "Classic Avocado Sourdough Toast #19",
  "description": "Variant #19: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 355,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 355,
    "protein": 7,
    "carbs": 34,
    "fat": 17,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "34",
  "name": "Greek Yogurt & Chia Parfait #20",
  "description": "Variant #20: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 320,
    "protein": 21,
    "carbs": 23,
    "fat": 11,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "35",
  "name": "Berry Almond Protein Oats #21",
  "description": "Variant #21: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 340,
    "protein": 28,
    "carbs": 42,
    "fat": 10,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "36",
  "name": "Spinach & Feta Egg Scramble #22",
  "description": "Variant #22: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 295,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 295,
    "protein": 22,
    "carbs": 4,
    "fat": 20,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "37",
  "name": "Classic Avocado Sourdough Toast #23",
  "description": "Variant #23: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 340,
    "protein": 8,
    "carbs": 34,
    "fat": 18,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "38",
  "name": "Greek Yogurt & Chia Parfait #24",
  "description": "Variant #24: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 305,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 305,
    "protein": 22,
    "carbs": 23,
    "fat": 12,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "39",
  "name": "Berry Almond Protein Oats #25",
  "description": "Variant #25: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 400,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 400,
    "protein": 26,
    "carbs": 42,
    "fat": 8,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "40",
  "name": "Spinach & Feta Egg Scramble #26",
  "description": "Variant #26: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 280,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 280,
    "protein": 23,
    "carbs": 4,
    "fat": 21,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "41",
  "name": "Classic Avocado Sourdough Toast #27",
  "description": "Variant #27: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 325,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 325,
    "protein": 9,
    "carbs": 34,
    "fat": 19,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "42",
  "name": "Greek Yogurt & Chia Parfait #28",
  "description": "Variant #28: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 290,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 290,
    "protein": 20,
    "carbs": 23,
    "fat": 10,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "43",
  "name": "Berry Almond Protein Oats #29",
  "description": "Variant #29: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 385,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 385,
    "protein": 27,
    "carbs": 42,
    "fat": 9,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "44",
  "name": "Spinach & Feta Egg Scramble #30",
  "description": "Variant #30: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 340,
    "protein": 24,
    "carbs": 4,
    "fat": 22,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "45",
  "name": "Classic Avocado Sourdough Toast #31",
  "description": "Variant #31: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 310,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 310,
    "protein": 7,
    "carbs": 34,
    "fat": 17,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "46",
  "name": "Greek Yogurt & Chia Parfait #32",
  "description": "Variant #32: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 275,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 275,
    "protein": 21,
    "carbs": 23,
    "fat": 11,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "47",
  "name": "Berry Almond Protein Oats #33",
  "description": "Variant #33: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 370,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 370,
    "protein": 28,
    "carbs": 42,
    "fat": 10,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "48",
  "name": "Spinach & Feta Egg Scramble #34",
  "description": "Variant #34: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 325,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 325,
    "protein": 22,
    "carbs": 4,
    "fat": 20,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "49",
  "name": "Classic Avocado Sourdough Toast #35",
  "description": "Variant #35: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 370,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 370,
    "protein": 8,
    "carbs": 34,
    "fat": 18,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "50",
  "name": "Greek Yogurt & Chia Parfait #36",
  "description": "Variant #36: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 260,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 260,
    "protein": 22,
    "carbs": 23,
    "fat": 12,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "51",
  "name": "Berry Almond Protein Oats #37",
  "description": "Variant #37: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 355,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 355,
    "protein": 26,
    "carbs": 42,
    "fat": 8,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "52",
  "name": "Spinach & Feta Egg Scramble #38",
  "description": "Variant #38: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 310,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 310,
    "protein": 23,
    "carbs": 4,
    "fat": 21,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "53",
  "name": "Classic Avocado Sourdough Toast #39",
  "description": "Variant #39: Thick sourdough toasted crispy, topped with mashed avocado, lemon juice, and chili flakes.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 355,
  "prepTime": "5m",
  "cookTime": "2m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "TOAST",
      "items": [
        "1 thick slice Sourdough Bread",
        "1/2 ripe Avocado",
        "1 tsp Lemon Juice"
      ]
    },
    {
      "category": "SEASONING",
      "items": [
        "1/2 tsp Chili Flakes",
        "Coarse Sea Salt",
        "Freshly cracked Pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Slice",
    "calories": 355,
    "protein": 9,
    "carbs": 34,
    "fat": 19,
    "vitamins": [
      {
        "name": "Vitamin E",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Toast Bread",
      "description": "Toast 1 thick slice of artisanal sourdough bread until crisp and golden brown on both sides."
    },
    {
      "step": 2,
      "title": "Mash Avocado",
      "description": "Scoop out 1/2 ripe avocado. Mash with 1 tsp fresh lemon juice, coarse sea salt, and black pepper in a small bowl."
    },
    {
      "step": 3,
      "title": "Spread and Season",
      "description": "Spread the creamy avocado mash evenly across the toasted sourdough. Sprinkle with 1/2 tsp red chili flakes."
    }
  ]
},
  {
  "id": "54",
  "name": "Greek Yogurt & Chia Parfait #40",
  "description": "Variant #40: Thick, probiotic-rich Greek yogurt layered with organic chia seeds, honey, and fresh strawberries.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "5m",
  "cookTime": "0m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1 cup Plain Greek Yogurt",
        "1 tbsp Chia Seeds",
        "1 tsp organic Honey"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "4 Fresh Strawberries, sliced",
        "2 tbsp Pumpkin seeds"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Jar",
    "calories": 320,
    "protein": 20,
    "carbs": 23,
    "fat": 10,
    "vitamins": [
      {
        "name": "Calcium",
        "value": "25% DV"
      },
      {
        "name": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Mix Seeds",
      "description": "Stir 1 cup plain Greek yogurt and 1 tbsp chia seeds together in a bowl or jar. Let rest for 2 minutes to thicken."
    },
    {
      "step": 2,
      "title": "Sweeten",
      "description": "Drizzle 1 tsp of organic honey through the chia yogurt mixture and stir gently."
    },
    {
      "step": 3,
      "title": "Layer Strawberries",
      "description": "Top with 4 sliced fresh strawberries and sprinkle 2 tbsp crunchy pumpkin seeds over the parfait."
    }
  ]
},
  {
  "id": "55",
  "name": "Berry Almond Protein Oats #41",
  "description": "Variant #41: Creamy vanilla protein oats loaded with fresh berries and toasted almond slices.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "5m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "1/2 cup Rolled Oats",
        "1 cup Unsweetened Almond Milk",
        "1 scoop Vanilla Protein Powder"
      ]
    },
    {
      "category": "TOPPINGS",
      "items": [
        "1/4 cup Fresh Blueberries",
        "1 tbsp Almond slices",
        "1 tsp Maple syrup"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 340,
    "protein": 27,
    "carbs": 42,
    "fat": 9,
    "vitamins": [
      {
        "name": "Iron",
        "value": "15% DV"
      },
      {
        "name": "Fiber",
        "value": "8g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Simmer Oats",
      "description": "In a small saucepan, bring 1 cup almond milk to a gentle simmer. Stir in 1/2 cup rolled oats and cook for 5 minutes, stirring occasionally."
    },
    {
      "step": 2,
      "title": "Whisk Protein",
      "description": "Remove the saucepan from the heat. Whisk in 1 scoop vanilla protein powder rapidly until the oats are creamy and smooth."
    },
    {
      "step": 3,
      "title": "Serve & Top",
      "description": "Pour oats into a bowl. Top with 1/4 cup fresh blueberries, 1 tbsp toasted almond slices, and drizzle with 1 tsp maple syrup."
    }
  ]
},
  {
  "id": "56",
  "name": "Spinach & Feta Egg Scramble #42",
  "description": "Variant #42: Fluffy scrambled eggs loaded with baby spinach and crumbled Mediterranean feta.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 295,
  "prepTime": "3m",
  "cookTime": "5m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "Breakfast",
    "Quick & Easy"
  ],
  "ingredients": [
    {
      "category": "EGGS",
      "items": [
        "3 large Eggs",
        "1 tbsp unsweetened almond milk",
        "1/2 cup Fresh Spinach",
        "Salt and pepper"
      ]
    },
    {
      "category": "CHEESE & SEARING",
      "items": [
        "2 tbsp Crumbled Feta Cheese",
        "1 tsp Butter or olive oil"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 295,
    "protein": 24,
    "carbs": 4,
    "fat": 22,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "45% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Whisk Eggs",
      "description": "Whisk 3 large eggs, 1 tbsp almond milk, a pinch of salt, and pepper in a small bowl until completely bubbly."
    },
    {
      "step": 2,
      "title": "Sauté Spinach",
      "description": "Melt 1 tsp butter in a skillet over medium heat. Sauté 1/2 cup baby spinach for 1-2 minutes until slightly wilted."
    },
    {
      "step": 3,
      "title": "Scramble & Cheese",
      "description": "Pour egg mixture into the skillet. Cook slowly for 3 minutes, folding gently. Fold in 2 tbsp crumbled feta right before serving."
    }
  ]
},
  {
  "id": "57",
  "name": "Crispy Sesame Tofu Bowl #1",
  "description": "Variant #1: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 460,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 460,
    "protein": 18,
    "carbs": 54,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "58",
  "name": "Mediterranean Chickpea Salad #2",
  "description": "Variant #2: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 335,
    "protein": 12,
    "carbs": 39,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "59",
  "name": "Creamy Cashew Broccoli Skillet #3",
  "description": "Variant #3: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 410,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 410,
    "protein": 14,
    "carbs": 22,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "60",
  "name": "Crispy Sesame Tofu Bowl #4",
  "description": "Variant #4: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 505,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 505,
    "protein": 18,
    "carbs": 55,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "61",
  "name": "Mediterranean Chickpea Salad #5",
  "description": "Variant #5: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 380,
    "protein": 12,
    "carbs": 38,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "62",
  "name": "Creamy Cashew Broccoli Skillet #6",
  "description": "Variant #6: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 380,
    "protein": 14,
    "carbs": 23,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "63",
  "name": "Crispy Sesame Tofu Bowl #7",
  "description": "Variant #7: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 475,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 475,
    "protein": 18,
    "carbs": 54,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "64",
  "name": "Mediterranean Chickpea Salad #8",
  "description": "Variant #8: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 350,
    "protein": 12,
    "carbs": 39,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "65",
  "name": "Creamy Cashew Broccoli Skillet #9",
  "description": "Variant #9: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 425,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 425,
    "protein": 14,
    "carbs": 22,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "66",
  "name": "Crispy Sesame Tofu Bowl #10",
  "description": "Variant #10: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 520,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 520,
    "protein": 18,
    "carbs": 55,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "67",
  "name": "Mediterranean Chickpea Salad #11",
  "description": "Variant #11: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 320,
    "protein": 12,
    "carbs": 38,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "68",
  "name": "Creamy Cashew Broccoli Skillet #12",
  "description": "Variant #12: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 395,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 395,
    "protein": 14,
    "carbs": 23,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "69",
  "name": "Crispy Sesame Tofu Bowl #13",
  "description": "Variant #13: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 490,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 490,
    "protein": 18,
    "carbs": 54,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "70",
  "name": "Mediterranean Chickpea Salad #14",
  "description": "Variant #14: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 365,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 365,
    "protein": 12,
    "carbs": 39,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "71",
  "name": "Creamy Cashew Broccoli Skillet #15",
  "description": "Variant #15: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 440,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 440,
    "protein": 14,
    "carbs": 22,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "72",
  "name": "Crispy Sesame Tofu Bowl #16",
  "description": "Variant #16: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 460,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 460,
    "protein": 18,
    "carbs": 55,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "73",
  "name": "Mediterranean Chickpea Salad #17",
  "description": "Variant #17: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 335,
    "protein": 12,
    "carbs": 38,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "74",
  "name": "Creamy Cashew Broccoli Skillet #18",
  "description": "Variant #18: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 410,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 410,
    "protein": 14,
    "carbs": 23,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "75",
  "name": "Crispy Sesame Tofu Bowl #19",
  "description": "Variant #19: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 505,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 505,
    "protein": 18,
    "carbs": 54,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "76",
  "name": "Mediterranean Chickpea Salad #20",
  "description": "Variant #20: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 380,
    "protein": 12,
    "carbs": 39,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "77",
  "name": "Creamy Cashew Broccoli Skillet #21",
  "description": "Variant #21: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 380,
    "protein": 14,
    "carbs": 22,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "78",
  "name": "Crispy Sesame Tofu Bowl #22",
  "description": "Variant #22: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 475,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 475,
    "protein": 18,
    "carbs": 55,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "79",
  "name": "Mediterranean Chickpea Salad #23",
  "description": "Variant #23: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 350,
    "protein": 12,
    "carbs": 38,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "80",
  "name": "Creamy Cashew Broccoli Skillet #24",
  "description": "Variant #24: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 425,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 425,
    "protein": 14,
    "carbs": 23,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "81",
  "name": "Crispy Sesame Tofu Bowl #25",
  "description": "Variant #25: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 520,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 520,
    "protein": 18,
    "carbs": 54,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "82",
  "name": "Mediterranean Chickpea Salad #26",
  "description": "Variant #26: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 320,
    "protein": 12,
    "carbs": 39,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "83",
  "name": "Creamy Cashew Broccoli Skillet #27",
  "description": "Variant #27: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 395,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 395,
    "protein": 14,
    "carbs": 22,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "84",
  "name": "Crispy Sesame Tofu Bowl #28",
  "description": "Variant #28: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 490,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 490,
    "protein": 18,
    "carbs": 55,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "85",
  "name": "Mediterranean Chickpea Salad #29",
  "description": "Variant #29: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 365,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 365,
    "protein": 12,
    "carbs": 38,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "86",
  "name": "Creamy Cashew Broccoli Skillet #30",
  "description": "Variant #30: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 440,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 440,
    "protein": 14,
    "carbs": 23,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "87",
  "name": "Crispy Sesame Tofu Bowl #31",
  "description": "Variant #31: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 460,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 460,
    "protein": 18,
    "carbs": 54,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "88",
  "name": "Mediterranean Chickpea Salad #32",
  "description": "Variant #32: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 335,
    "protein": 12,
    "carbs": 39,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "89",
  "name": "Creamy Cashew Broccoli Skillet #33",
  "description": "Variant #33: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 410,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 410,
    "protein": 14,
    "carbs": 22,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "90",
  "name": "Crispy Sesame Tofu Bowl #34",
  "description": "Variant #34: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 505,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 505,
    "protein": 18,
    "carbs": 55,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "91",
  "name": "Mediterranean Chickpea Salad #35",
  "description": "Variant #35: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 380,
    "protein": 12,
    "carbs": 38,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "92",
  "name": "Creamy Cashew Broccoli Skillet #36",
  "description": "Variant #36: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 380,
    "protein": 14,
    "carbs": 23,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "93",
  "name": "Crispy Sesame Tofu Bowl #37",
  "description": "Variant #37: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 475,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 475,
    "protein": 18,
    "carbs": 54,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "94",
  "name": "Mediterranean Chickpea Salad #38",
  "description": "Variant #38: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 350,
    "protein": 12,
    "carbs": 39,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "95",
  "name": "Creamy Cashew Broccoli Skillet #39",
  "description": "Variant #39: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 425,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 425,
    "protein": 14,
    "carbs": 22,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "96",
  "name": "Crispy Sesame Tofu Bowl #40",
  "description": "Variant #40: Golden cubed tofu tossed in sesame soy glaze with warm brown rice and steamed broccoli.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 520,
  "prepTime": "10m",
  "cookTime": "15m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "TOFU",
      "items": [
        "1 block Extra Firm Tofu, pressed and cubed",
        "1 tbsp Cornstarch",
        "1 tbsp Sesame Oil"
      ]
    },
    {
      "category": "GLAZE & BASE",
      "items": [
        "2 tbsp Soy Sauce",
        "1 tbsp Maple Syrup",
        "1 cup Cooked Brown Rice",
        "1 cup Broccoli florets"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 520,
    "protein": 18,
    "carbs": 55,
    "fat": 16,
    "vitamins": [
      {
        "name": "Iron",
        "value": "20% DV"
      },
      {
        "name": "Calcium",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Coat Tofu",
      "description": "Toss cubed firm tofu with 1 tbsp cornstarch in a bowl until all pieces are lightly and evenly coated."
    },
    {
      "step": 2,
      "title": "Crisp Tofu",
      "description": "Heat 1 sesame oil in a non-stick skillet. Sauté tofu cubes for 8-10 minutes until crispy and golden on all sides."
    },
    {
      "step": 3,
      "title": "Glaze & Assemble",
      "description": "Pour in 2 tbsp soy sauce and 1 maple syrup; stir to coat tofu. Plate with 1 cup cooked brown rice and steamed broccoli."
    }
  ]
},
  {
  "id": "97",
  "name": "Mediterranean Chickpea Salad #41",
  "description": "Variant #41: Protein-packed salad of garbanzo beans, fresh cucumbers, juicy cherry tomatoes, and red onion.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "8m",
  "cookTime": "0m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "SALAD",
      "items": [
        "1 can Chickpeas, drained and rinsed",
        "1 Cucumber, diced",
        "1 cup Cherry Tomatoes, halved",
        "1/4 cup Red Onion, chopped"
      ]
    },
    {
      "category": "DRESSING",
      "items": [
        "2 tbsp Extra Virgin Olive Oil",
        "1 tbsp Lemon Juice",
        "1 tsp Dried Oregano",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 320,
    "protein": 12,
    "carbs": 38,
    "fat": 15,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "30% DV"
      },
      {
        "name": "Fiber",
        "value": "9g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Chop Veggies",
      "description": "Chop 1 cucumber, halve 1 cup cherry tomatoes, and finely mince 1/4 cup red onion."
    },
    {
      "step": 2,
      "title": "Rinse Chickpeas",
      "description": "Open 1 can chickpeas. Drain completely and rinse under cold water in a colander."
    },
    {
      "step": 3,
      "title": "Combine and Dress",
      "description": "Combine chickpeas and chopped veggies in a bowl. Drizzle with 2 tbsp olive oil and 1 tbsp lemon juice; toss with oregano."
    }
  ]
},
  {
  "id": "98",
  "name": "Creamy Cashew Broccoli Skillet #42",
  "description": "Variant #42: Crispy green broccoli florets stir-fried in a rich, buttery cashew cream sauce.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 395,
  "prepTime": "10m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "Vegan",
    "Gluten-Free"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "3 cups Broccoli florets",
        "1 tbsp Olive Oil",
        "2 cloves Garlic, minced"
      ]
    },
    {
      "category": "CASHEW CREAM",
      "items": [
        "1/2 cup Raw Cashews, soaked in hot water",
        "1/4 cup Water",
        "1 tbsp Nutritional Yeast",
        "1/2 tsp Salt"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 395,
    "protein": 14,
    "carbs": 23,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin C",
        "value": "150% DV"
      },
      {
        "name": "Fiber",
        "value": "6g"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Blend Cream",
      "description": "Blend 1/2 cup soaked cashews, 1/4 cup fresh water, 1 nutritional yeast, and salt until smooth and creamy."
    },
    {
      "step": 2,
      "title": "Sauté Broccoli",
      "description": "Heat 1 olive oil in a skillet. Sauté 3 cups broccoli florets and garlic for 5 minutes until vibrant and tender-crisp."
    },
    {
      "step": 3,
      "title": "Simmer Sauce",
      "description": "Pour the cashew cream over the broccoli. Turn heat to low and simmer for 2 minutes until hot and bubbly."
    }
  ]
},
  {
  "id": "99",
  "name": "Grilled Garlic-Herb Steak Bites #1",
  "description": "Variant #1: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 540,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 540,
    "protein": 46,
    "carbs": 1,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "100",
  "name": "Baked Honey Garlic Salmon Fillet #2",
  "description": "Variant #2: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 495,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 495,
    "protein": 39,
    "carbs": 13,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "101",
  "name": "Lemon Herb Grilled Chicken Breast #3",
  "description": "Variant #3: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 350,
    "protein": 44,
    "carbs": 2,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "102",
  "name": "Grilled Garlic-Herb Steak Bites #4",
  "description": "Variant #4: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 585,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 585,
    "protein": 46,
    "carbs": 2,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "103",
  "name": "Baked Honey Garlic Salmon Fillet #5",
  "description": "Variant #5: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 540,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 540,
    "protein": 39,
    "carbs": 12,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "104",
  "name": "Lemon Herb Grilled Chicken Breast #6",
  "description": "Variant #6: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 320,
    "protein": 44,
    "carbs": 3,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "105",
  "name": "Grilled Garlic-Herb Steak Bites #7",
  "description": "Variant #7: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 555,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 555,
    "protein": 46,
    "carbs": 1,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "106",
  "name": "Baked Honey Garlic Salmon Fillet #8",
  "description": "Variant #8: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 510,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 510,
    "protein": 39,
    "carbs": 13,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "107",
  "name": "Lemon Herb Grilled Chicken Breast #9",
  "description": "Variant #9: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 365,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 365,
    "protein": 44,
    "carbs": 2,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "108",
  "name": "Grilled Garlic-Herb Steak Bites #10",
  "description": "Variant #10: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 600,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 600,
    "protein": 46,
    "carbs": 2,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "109",
  "name": "Baked Honey Garlic Salmon Fillet #11",
  "description": "Variant #11: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 480,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 480,
    "protein": 39,
    "carbs": 12,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "110",
  "name": "Lemon Herb Grilled Chicken Breast #12",
  "description": "Variant #12: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 335,
    "protein": 44,
    "carbs": 3,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "111",
  "name": "Grilled Garlic-Herb Steak Bites #13",
  "description": "Variant #13: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 570,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 570,
    "protein": 46,
    "carbs": 1,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "112",
  "name": "Baked Honey Garlic Salmon Fillet #14",
  "description": "Variant #14: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 525,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 525,
    "protein": 39,
    "carbs": 13,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "113",
  "name": "Lemon Herb Grilled Chicken Breast #15",
  "description": "Variant #15: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 380,
    "protein": 44,
    "carbs": 2,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "114",
  "name": "Grilled Garlic-Herb Steak Bites #16",
  "description": "Variant #16: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 540,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 540,
    "protein": 46,
    "carbs": 2,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "115",
  "name": "Baked Honey Garlic Salmon Fillet #17",
  "description": "Variant #17: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 495,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 495,
    "protein": 39,
    "carbs": 12,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "116",
  "name": "Lemon Herb Grilled Chicken Breast #18",
  "description": "Variant #18: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 350,
    "protein": 44,
    "carbs": 3,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "117",
  "name": "Grilled Garlic-Herb Steak Bites #19",
  "description": "Variant #19: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 585,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 585,
    "protein": 46,
    "carbs": 1,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "118",
  "name": "Baked Honey Garlic Salmon Fillet #20",
  "description": "Variant #20: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 540,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 540,
    "protein": 39,
    "carbs": 13,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "119",
  "name": "Lemon Herb Grilled Chicken Breast #21",
  "description": "Variant #21: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 320,
    "protein": 44,
    "carbs": 2,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "120",
  "name": "Grilled Garlic-Herb Steak Bites #22",
  "description": "Variant #22: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 555,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 555,
    "protein": 46,
    "carbs": 2,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "121",
  "name": "Baked Honey Garlic Salmon Fillet #23",
  "description": "Variant #23: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 510,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 510,
    "protein": 39,
    "carbs": 12,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "122",
  "name": "Lemon Herb Grilled Chicken Breast #24",
  "description": "Variant #24: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 365,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 365,
    "protein": 44,
    "carbs": 3,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "123",
  "name": "Grilled Garlic-Herb Steak Bites #25",
  "description": "Variant #25: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 600,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 600,
    "protein": 46,
    "carbs": 1,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "124",
  "name": "Baked Honey Garlic Salmon Fillet #26",
  "description": "Variant #26: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 480,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 480,
    "protein": 39,
    "carbs": 13,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "125",
  "name": "Lemon Herb Grilled Chicken Breast #27",
  "description": "Variant #27: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 335,
    "protein": 44,
    "carbs": 2,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "126",
  "name": "Grilled Garlic-Herb Steak Bites #28",
  "description": "Variant #28: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 570,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 570,
    "protein": 46,
    "carbs": 2,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "127",
  "name": "Baked Honey Garlic Salmon Fillet #29",
  "description": "Variant #29: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 525,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 525,
    "protein": 39,
    "carbs": 12,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "128",
  "name": "Lemon Herb Grilled Chicken Breast #30",
  "description": "Variant #30: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 380,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 380,
    "protein": 44,
    "carbs": 3,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "129",
  "name": "Grilled Garlic-Herb Steak Bites #31",
  "description": "Variant #31: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 540,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 540,
    "protein": 46,
    "carbs": 1,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "130",
  "name": "Baked Honey Garlic Salmon Fillet #32",
  "description": "Variant #32: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 495,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 495,
    "protein": 39,
    "carbs": 13,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "131",
  "name": "Lemon Herb Grilled Chicken Breast #33",
  "description": "Variant #33: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 350,
    "protein": 44,
    "carbs": 2,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "132",
  "name": "Grilled Garlic-Herb Steak Bites #34",
  "description": "Variant #34: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 585,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 585,
    "protein": 46,
    "carbs": 2,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "133",
  "name": "Baked Honey Garlic Salmon Fillet #35",
  "description": "Variant #35: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 540,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 540,
    "protein": 39,
    "carbs": 12,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "134",
  "name": "Lemon Herb Grilled Chicken Breast #36",
  "description": "Variant #36: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 320,
    "protein": 44,
    "carbs": 3,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "135",
  "name": "Grilled Garlic-Herb Steak Bites #37",
  "description": "Variant #37: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 555,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 555,
    "protein": 46,
    "carbs": 1,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "136",
  "name": "Baked Honey Garlic Salmon Fillet #38",
  "description": "Variant #38: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 510,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 510,
    "protein": 39,
    "carbs": 13,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "137",
  "name": "Lemon Herb Grilled Chicken Breast #39",
  "description": "Variant #39: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 365,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 365,
    "protein": 44,
    "carbs": 2,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "138",
  "name": "Grilled Garlic-Herb Steak Bites #40",
  "description": "Variant #40: Juicy sirloin steak cubes seared in garlic butter, rosemary, and thyme.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 600,
  "prepTime": "5m",
  "cookTime": "8m",
  "serves": 2,
  "difficulty": "Medium",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "STEAK",
      "items": [
        "1 lb Sirloin Steak, cut into 1-inch cubes",
        "Salt and Black Pepper",
        "1 tbsp Avocado oil"
      ]
    },
    {
      "category": "GARLIC HERB",
      "items": [
        "2 tbsp Butter",
        "3 cloves Garlic, minced",
        "1 stem fresh Rosemary",
        "1 stem fresh Thyme"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Plate",
    "calories": 600,
    "protein": 46,
    "carbs": 2,
    "fat": 38,
    "vitamins": [
      {
        "name": "Iron",
        "value": "35% DV"
      },
      {
        "name": "Zinc",
        "value": "45% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Season Steak",
      "description": "Pat 1 lb steak cubes dry with paper towels. Season generously on all sides with salt and black pepper."
    },
    {
      "step": 2,
      "title": "Sear Meat",
      "description": "Heat 1 avocado oil in a heavy cast-iron skillet over high heat. Sear steak cubes for 2 minutes per side until browned."
    },
    {
      "step": 3,
      "title": "Baste Herb Butter",
      "description": "Reduce heat to medium-low. Add 2 tbsp butter, minced garlic, rosemary, and thyme; spoon butter over steak for 2 minutes."
    }
  ]
},
  {
  "id": "139",
  "name": "Baked Honey Garlic Salmon Fillet #41",
  "description": "Variant #41: Flaky wild-caught salmon baked in a glaze of sweet honey, garlic, and fresh citrus.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 480,
  "prepTime": "5m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SALMON",
      "items": [
        "1 Wild Salmon Fillet (6oz)",
        "1/2 tsp Lemon juice",
        "Salt and pepper"
      ]
    },
    {
      "category": "GLAZE",
      "items": [
        "1 tbsp Honey",
        "2 cloves Garlic, minced",
        "1 tbsp Soy Sauce"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Fillet",
    "calories": 480,
    "protein": 39,
    "carbs": 12,
    "fat": 27,
    "vitamins": [
      {
        "name": "Vitamin D",
        "value": "120% DV"
      },
      {
        "name": "B12",
        "value": "85% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat your oven to 400°F (200°C). Place the salmon fillet on a sheet of tin foil on a baking tray."
    },
    {
      "step": 2,
      "title": "Glaze Salmon",
      "description": "Mix honey, minced garlic, soy sauce, and lemon juice. Spoon dressing evenly over the salmon fillet."
    },
    {
      "step": 3,
      "title": "Bake through",
      "description": "Bake salmon in the preheated oven for 12-14 minutes until the meat flakes easily with a fork."
    }
  ]
},
  {
  "id": "140",
  "name": "Lemon Herb Grilled Chicken Breast #42",
  "description": "Variant #42: Lean, juicy grilled chicken breast marinated in fresh oregano, lemon, and olive oil.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "10m",
  "cookTime": "12m",
  "serves": 1,
  "difficulty": "Easy",
  "tags": [
    "High Protein",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "CHICKEN",
      "items": [
        "1 boneless Chicken Breast (7oz)",
        "1 tbsp Olive Oil",
        "Salt and pepper"
      ]
    },
    {
      "category": "MARINADE",
      "items": [
        "1 tbsp Lemon juice",
        "1 tsp Dried Oregano",
        "1 clove Garlic, minced"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Breast",
    "calories": 335,
    "protein": 44,
    "carbs": 3,
    "fat": 14,
    "vitamins": [
      {
        "name": "Niacin",
        "value": "80% DV"
      },
      {
        "name": "Selenium",
        "value": "60% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Marinate Chicken",
      "description": "Toss chicken breast with 1 olive oil, lemon juice, minced garlic, oregano, salt, and pepper. Let rest for 10 minutes."
    },
    {
      "step": 2,
      "title": "Grill Breast",
      "description": "Heat a grill pan over medium-high heat. Grill chicken for 6 minutes per side until fully cooked through."
    },
    {
      "step": 3,
      "title": "Rest & Slice",
      "description": "Remove the chicken breast from the heat. Let it rest for 3 minutes on a cutting board, then slice."
    }
  ]
},
  {
  "id": "141",
  "name": "Creamy Keto Garlic Butter Shrimp #1",
  "description": "Variant #1: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 420,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 420,
    "protein": 24,
    "carbs": 3,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "142",
  "name": "Classic Zucchini Pesto Noodles #2",
  "description": "Variant #2: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 325,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 325,
    "protein": 7,
    "carbs": 9,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "143",
  "name": "Bacon & Cheddar Egg Muffins #3",
  "description": "Variant #3: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 320,
    "protein": 20,
    "carbs": 2,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "144",
  "name": "Creamy Keto Garlic Butter Shrimp #4",
  "description": "Variant #4: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 465,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 465,
    "protein": 24,
    "carbs": 4,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "145",
  "name": "Classic Zucchini Pesto Noodles #5",
  "description": "Variant #5: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 370,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 370,
    "protein": 7,
    "carbs": 8,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "146",
  "name": "Bacon & Cheddar Egg Muffins #6",
  "description": "Variant #6: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 290,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 290,
    "protein": 20,
    "carbs": 3,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "147",
  "name": "Creamy Keto Garlic Butter Shrimp #7",
  "description": "Variant #7: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 435,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 435,
    "protein": 24,
    "carbs": 3,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "148",
  "name": "Classic Zucchini Pesto Noodles #8",
  "description": "Variant #8: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 340,
    "protein": 7,
    "carbs": 9,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "149",
  "name": "Bacon & Cheddar Egg Muffins #9",
  "description": "Variant #9: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 335,
    "protein": 20,
    "carbs": 2,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "150",
  "name": "Creamy Keto Garlic Butter Shrimp #10",
  "description": "Variant #10: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 480,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 480,
    "protein": 24,
    "carbs": 4,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "151",
  "name": "Classic Zucchini Pesto Noodles #11",
  "description": "Variant #11: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 310,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 310,
    "protein": 7,
    "carbs": 8,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "152",
  "name": "Bacon & Cheddar Egg Muffins #12",
  "description": "Variant #12: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 305,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 305,
    "protein": 20,
    "carbs": 3,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "153",
  "name": "Creamy Keto Garlic Butter Shrimp #13",
  "description": "Variant #13: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 450,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 450,
    "protein": 24,
    "carbs": 3,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "154",
  "name": "Classic Zucchini Pesto Noodles #14",
  "description": "Variant #14: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 355,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 355,
    "protein": 7,
    "carbs": 9,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "155",
  "name": "Bacon & Cheddar Egg Muffins #15",
  "description": "Variant #15: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 350,
    "protein": 20,
    "carbs": 2,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "156",
  "name": "Creamy Keto Garlic Butter Shrimp #16",
  "description": "Variant #16: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 420,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 420,
    "protein": 24,
    "carbs": 4,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "157",
  "name": "Classic Zucchini Pesto Noodles #17",
  "description": "Variant #17: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 325,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 325,
    "protein": 7,
    "carbs": 8,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "158",
  "name": "Bacon & Cheddar Egg Muffins #18",
  "description": "Variant #18: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 320,
    "protein": 20,
    "carbs": 3,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "159",
  "name": "Creamy Keto Garlic Butter Shrimp #19",
  "description": "Variant #19: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 465,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 465,
    "protein": 24,
    "carbs": 3,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "160",
  "name": "Classic Zucchini Pesto Noodles #20",
  "description": "Variant #20: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 370,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 370,
    "protein": 7,
    "carbs": 9,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "161",
  "name": "Bacon & Cheddar Egg Muffins #21",
  "description": "Variant #21: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 290,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 290,
    "protein": 20,
    "carbs": 2,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "162",
  "name": "Creamy Keto Garlic Butter Shrimp #22",
  "description": "Variant #22: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 435,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 435,
    "protein": 24,
    "carbs": 4,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "163",
  "name": "Classic Zucchini Pesto Noodles #23",
  "description": "Variant #23: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 340,
    "protein": 7,
    "carbs": 8,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "164",
  "name": "Bacon & Cheddar Egg Muffins #24",
  "description": "Variant #24: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 335,
    "protein": 20,
    "carbs": 3,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "165",
  "name": "Creamy Keto Garlic Butter Shrimp #25",
  "description": "Variant #25: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 480,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 480,
    "protein": 24,
    "carbs": 3,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "166",
  "name": "Classic Zucchini Pesto Noodles #26",
  "description": "Variant #26: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 310,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 310,
    "protein": 7,
    "carbs": 9,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "167",
  "name": "Bacon & Cheddar Egg Muffins #27",
  "description": "Variant #27: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 305,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 305,
    "protein": 20,
    "carbs": 2,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "168",
  "name": "Creamy Keto Garlic Butter Shrimp #28",
  "description": "Variant #28: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 450,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 450,
    "protein": 24,
    "carbs": 4,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "169",
  "name": "Classic Zucchini Pesto Noodles #29",
  "description": "Variant #29: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 355,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 355,
    "protein": 7,
    "carbs": 8,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "170",
  "name": "Bacon & Cheddar Egg Muffins #30",
  "description": "Variant #30: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 350,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 350,
    "protein": 20,
    "carbs": 3,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "171",
  "name": "Creamy Keto Garlic Butter Shrimp #31",
  "description": "Variant #31: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 420,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 420,
    "protein": 24,
    "carbs": 3,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "172",
  "name": "Classic Zucchini Pesto Noodles #32",
  "description": "Variant #32: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 325,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 325,
    "protein": 7,
    "carbs": 9,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "173",
  "name": "Bacon & Cheddar Egg Muffins #33",
  "description": "Variant #33: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 320,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 320,
    "protein": 20,
    "carbs": 2,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "174",
  "name": "Creamy Keto Garlic Butter Shrimp #34",
  "description": "Variant #34: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 465,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 465,
    "protein": 24,
    "carbs": 4,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "175",
  "name": "Classic Zucchini Pesto Noodles #35",
  "description": "Variant #35: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 370,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 370,
    "protein": 7,
    "carbs": 8,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "176",
  "name": "Bacon & Cheddar Egg Muffins #36",
  "description": "Variant #36: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 290,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 290,
    "protein": 20,
    "carbs": 3,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "177",
  "name": "Creamy Keto Garlic Butter Shrimp #37",
  "description": "Variant #37: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 435,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 435,
    "protein": 24,
    "carbs": 3,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "178",
  "name": "Classic Zucchini Pesto Noodles #38",
  "description": "Variant #38: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 340,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 340,
    "protein": 7,
    "carbs": 9,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "179",
  "name": "Bacon & Cheddar Egg Muffins #39",
  "description": "Variant #39: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 335,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 335,
    "protein": 20,
    "carbs": 2,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
  ]
},
  {
  "id": "180",
  "name": "Creamy Keto Garlic Butter Shrimp #40",
  "description": "Variant #40: Plump pink shrimp sautéed in white wine garlic butter cream sauce.",
  "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 480,
  "prepTime": "5m",
  "cookTime": "6m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "SHRIMP",
      "items": [
        "1/2 lb Peeled Shrimp",
        "1 tbsp Avocado oil",
        "Salt and black pepper"
      ]
    },
    {
      "category": "GARLIC BUTTER",
      "items": [
        "2 tbsp Grass-fed Butter",
        "3 cloves Garlic, minced",
        "1/4 cup Heavy Cream",
        "1 tbsp fresh Parsley"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 480,
    "protein": 24,
    "carbs": 4,
    "fat": 34,
    "vitamins": [
      {
        "name": "B12",
        "value": "60% DV"
      },
      {
        "name": "Selenium",
        "value": "50% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Sear Shrimp",
      "description": "Heat 1 avocado oil in a pan. Season shrimp and sauté for 1-2 minutes per side until pink; set aside."
    },
    {
      "step": 2,
      "title": "Make Sauce",
      "description": "Melt 2 butter in same pan. Cook garlic for 1 minute. Add cream and simmer for 2 minutes to thicken."
    },
    {
      "step": 3,
      "title": "Toss & Serve",
      "description": "Return shrimp to the creamy garlic pan. Toss to coat for 1 minute. Garnish with 1 fresh parsley."
    }
  ]
},
  {
  "id": "181",
  "name": "Classic Zucchini Pesto Noodles #41",
  "description": "Variant #41: Spiralized fresh zucchini noodles tossed in raw pine nut basil pesto.",
  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 310,
  "prepTime": "10m",
  "cookTime": "3m",
  "serves": 2,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "NOODLES",
      "items": [
        "2 large fresh Zucchinis",
        "1 tbsp Olive Oil"
      ]
    },
    {
      "category": "PESTO & CHEESE",
      "items": [
        "3 tbsp Basil Pesto",
        "2 tbsp Grated Parmesan Cheese",
        "Salt and pepper"
      ]
    }
  ],
  "nutrition": {
    "perServing": "1 Bowl",
    "calories": 310,
    "protein": 7,
    "carbs": 8,
    "fat": 30,
    "vitamins": [
      {
        "name": "Vitamin A",
        "value": "35% DV"
      },
      {
        "name": "C",
        "value": "40% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Spiralize Zucchini",
      "description": "Spiralize 2 large fresh zucchinis into long noodles. Squeeze excess water using paper towels."
    },
    {
      "step": 2,
      "title": "Sauté Noodles",
      "description": "Heat 1 olive oil in a skillet. Sauté zucchini noodles for 2-3 minutes until warm but still firm."
    },
    {
      "step": 3,
      "title": "Dress Pesto",
      "description": "Remove skillet from heat. Stir in 3 tbsp basil pesto and toss thoroughly. Top with grated parmesan cheese."
    }
  ]
},
  {
  "id": "182",
  "name": "Bacon & Cheddar Egg Muffins #42",
  "description": "Variant #42: Low-carb keto breakfast muffins loaded with crispy bacon and melted cheddar.",
  "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  "sideImages": [
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=400"
  ],
  "kcal": 305,
  "prepTime": "5m",
  "cookTime": "15m",
  "serves": 3,
  "difficulty": "Easy",
  "tags": [
    "Keto",
    "High Fat",
    "Low Carb"
  ],
  "ingredients": [
    {
      "category": "BASE",
      "items": [
        "6 large Eggs",
        "2 tbsp Heavy Cream",
        "Salt and black pepper"
      ]
    },
    {
      "category": "FILLINGS",
      "items": [
        "4 slices Bacon, cooked and crumbled",
        "1/2 cup Shredded Cheddar Cheese"
      ]
    }
  ],
  "nutrition": {
    "perServing": "2 Muffins",
    "calories": 305,
    "protein": 20,
    "carbs": 3,
    "fat": 24,
    "vitamins": [
      {
        "name": "B12",
        "value": "30% DV"
      },
      {
        "name": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Preheat Oven",
      "description": "Preheat oven to 375°F (190°C). Grease 6 muffin tin cups heavily with cooking spray or butter."
    },
    {
      "step": 2,
      "title": "Whisk Base",
      "description": "Whisk 6 large eggs, 2 tbsp heavy cream, salt, and pepper in a medium bowl until blended."
    },
    {
      "step": 3,
      "title": "Assemble & Bake",
      "description": "Divide crumbled bacon and shredded cheddar among muffin cups. Pour egg mixture over fill. Bake for 15-18 minutes."
    }
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
