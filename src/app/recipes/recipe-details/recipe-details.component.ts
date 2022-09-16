import { Component ,Input} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector:'app-recipe-details',
    templateUrl:'./recipe-details.component.html',
    styleUrls:['./recipe-details.component.scss']

})
export class RecipeDetailsComponent{

    title='saishree'

    @Input() recipeToAdd: Recipe;

    constructor(private recipeService:RecipeService) {
        
    }

    addToShoppingList(ingredient:Ingredient[]) {
        this.recipeService.addIngredientsToShopping(ingredient);
    }

}