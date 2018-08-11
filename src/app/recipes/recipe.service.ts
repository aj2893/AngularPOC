import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipe 1', 'This is a Simple test',
    'https://images-gmi-pmc.edge-generalmills.com/2157c0dc-2a0e-4039-9339-1eccfd4c9556.jpg',
    [
        new Ingredient('meat', 1),
        new Ingredient('beef', 2)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipe 2', 'This is a Simple test',
    'https://images-gmi-pmc.edge-generalmills.com/2157c0dc-2a0e-4039-9339-1eccfd4c9556.jpg',
    [
        new Ingredient('meat', 2),
        new Ingredient('beef', 3)
    ])
    ];

    constructor(private slService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
