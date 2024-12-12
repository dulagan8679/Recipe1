// Function to toggle the visibility of recipe details
function toggleRecipe(recipeId) {
    var recipeDetails = document.getElementById(recipeId);

    // Toggle visibility of the clicked recipe
    if (recipeDetails.style.display === "none" || recipeDetails.style.display === "") {
        recipeDetails.style.display = "block";  // Show the recipe details
    } else {
        recipeDetails.style.display = "none";   // Hide the recipe details
    }
}

function toggleRecipe(recipeId) {
    // Select all recipe details
    const allRecipes = document.querySelectorAll('.recipe-details');
    
    // Iterate through each recipe detail
    allRecipes.forEach(recipe => {
        // If the current recipe's ID matches the clicked recipeId
        if (recipe.id === recipeId) {
            // Toggle its visibility
            recipe.classList.toggle('active');
        } else {
            // Ensure all other recipes are closed
            recipe.classList.remove('active');
        }
    });
}

// Get the current URL path
const currentPath = window.location.pathname;

// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Add 'active' class to the matching link
navLinks.forEach(link => {
    if (link.href.includes(currentPath)) {
        link.classList.add('active');
    }
});

// JavaScript to handle the modal opening and displaying the recipe details
function toggleRecipe(dessertName) {
    let recipeContent = '';
    
    // Define recipe data
    const recipes = {
        'Sphagetti': {
            ingredients: ['Sphagetti', 'Onion', 'Hotdog'],
            steps: ['Prepare all the ingredients', 'Make the sauce', 'Toss the noodles and sauce together']
        },
        'Leche Flan': {
            ingredients: ['Egg yolks', 'Condensed milk', 'Evaporated milk', 'Sugar', 'Dayap rind', 'Caramelized sugar'],
            steps: [
                'Beat the egg yolks and add the milk, sugar, and dayap rind. Mix thoroughly.',
                'Strain the resulting mixture to make it fine; set aside.',
                'Pour caramelized sugar in a molder (llanera). Follow with the egg yolk mixture.'
            ]
        },
        'Maja Blanca': {
            ingredients: ['Coconut milk', 'Cornstarch', 'Condensed milk', 'Fresh milk', 'Granulated sugar', 'Whole sweet kernel corn', 'Toasted grated coconut'],
            steps: [
                'Pour the coconut milk in a cooking pot and bring to a boil.',
                'Add the sugar, condensed milk, and whole sweet kernel corn then stir until all the ingredients are evenly distributed.',
                'Simmer for 8 minutes.',
                'Combine the milk and cornstarch, then whisk until the cornstarch is dissolved.',
                'Pour the fresh milk and cornstarch mixture in the cooking pot and stir thoroughly.',
                'Allow to cook while stirring until the mixture reaches your desired thickness.',
                'Pour the mixture in a serving tray, then arrange and flatten the top using a flat tool such as a wooden spatula.',
                'Allow to cool down, then refrigerate for at least 1 hour.'
            ]
        },
        'Palitaw':{
            ingredients: ['4 cups flour, sifted',' 2 cups sugar, sifted','2 1/2 tbsp baking powder','1 cup evaporated milk','2 1/2 cups water',' 1/8 teaspoon Pandan essence', '1/2 cup butter, meltedy', '1 piece egg, raw','Small slices of cheese',' 4 cups water for steaming'  ],
            steps: [
                'In a mixing bowl, combine the dry ingredients starting from the flour, sugar, and baking powder then mix well',
                'Add the butter, evaporated milk, egg, water, and pandan essence (dissolve the pandan essence in water) then mix all the ingredients thoroughly.',
                'Pour the mixture into individual molds.',
                'If you are using non-quick melt cheese, you may put the cheese on top of the mixture; otherwise, put the cheese on top after steaming.',
                'Pour the water into the steamer.',
                'Arrange the molds in the steamer then steam for about 20 ',
                'Remove from the mold and arrange on a serving plate.',
                'Serve either hot or cold. This goes well with dinuguan. '
            ]
        },
        'Linapet':{
            ingredients: ['2 kilograms of ground sticky rice','1 teaspoon salt','1/2 kilograms sugar','1/2 kilograms of peanuts', 'roasted and ground', '1/2 cup of sugar', 'Hot water', 'banana leaves'
    ],
            steps: [
                'Prepare the rice mixture:In a large bowl,combine the gorund diket,salt,and sugar.Mix these ingredients thoroughly.',
                'Create the dough: Gradually add hot water, ensuring you pour just enough to form a sti Linapetff dough. The consistensy is crucial to crafting',
                'Enhance the peanut filing: Enhance the flavor by sweetening the roasted and ground peanuts with half cup of sugar',
                'Prepare banana leaves: Get ready for wrapping process by wilting banana leaves over a fire. Cut them into square pieces, approximatly 10 inches each',
                'Wrap the linapet and top with ground peanut',
                'Boil the linapet by 20-30 minutes'
            ]
        },
        'Puto':{
            ingredients: ['Flour', 'water', 'grated coconut', 'sugar', 'sesame seeds(optional)'],
            steps: [
                'Mix glutinous rice flour with enough water to form a dough.',
                'Shape the dough into small discs.',
                'Boil water in a pot and drop the discs into the boiling water.',
                'Once they float, remove them and roll in grated coconut mixed with sugar.',
                'Serve warm.'
            ]
        },
        
        'Turon': {
            ingredients: [
                '6 pieces bananas (saba or plantains), cut in half lengthwise',
                '1 cup ripe jackfruit, sliced',
                '1 1/2 cups sugar',
                '12 pieces lumpia wrapper',
                '2 cups cooking oil'
                     ],
            steps: [
                         'Roll the banana on a plate with sugar to ensure it is coated evenly.',
                         'Place the sugar-coated banana on a lumpia wrapper.',
                         'Add a slice of ripe jackfruit on top.',
                         'Fold and lock the spring roll wrapper. Use water to seal the edges.',
                         'In a pan, heat the oil and add some sugar. Wait until the sugar caramelizes and floats.',
                         'Put the wrapped banana into the pan and fry until the wrapper turns golden brown and the extra sugar sticks to it.',
                         'Serve hot as a dessert or snack. Share and enjoy!'
    ]
}


    };

    // Create the modal content dynamically based on dessert name
    if (recipes[dessertName]) {
        let recipe = recipes[dessertName];
        recipeContent = `<h6>Ingredients</h6><ul>`;
        recipe.ingredients.forEach(item => {
            recipeContent += `<li>${item}</li>`;
        });
        recipeContent += `</ul><h6>Steps</h6><ol>`;
        recipe.steps.forEach(step => {                                                                       
            recipeContent += `<li>${step}</li>`;
        });
        recipeContent += `</ol>`;
    }

    // Inject content into modal and show it
    document.getElementById('recipeContent').innerHTML = recipeContent;
    var modal = new bootstrap.Modal(document.getElementById('recipeModal'));
    modal.show();
}


/* viand*/
function showModal(recipeId) {
    var myModal = new bootstrap.Modal(document.getElementById(recipeId), {
        keyboard: false
    });
    myModal.show();
}
