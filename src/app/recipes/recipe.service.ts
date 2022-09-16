import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping/shopping.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [new Recipe('test-recipe', 'test', "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", [new Ingredient('meat', 3), new Ingredient('milk', 4)])];

    constructor(private ingredientService:ShoppingService) {
        

    }
    ingredientsToAdd = new EventEmitter<Ingredient[]>();

   public recipeSelected = new EventEmitter<Recipe>();
    
    getRecipes() {
        return this.recipes.slice();
    }
    

    addIngredientsToShopping(ingredients:Ingredient[]) {
    //   return  this.ingredientsToAdd.emit(ingredients);
        this.ingredientService.addMultipleIngredients(ingredients);
    }
}