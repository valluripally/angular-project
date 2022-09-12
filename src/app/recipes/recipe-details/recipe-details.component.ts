import { Component ,Input} from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector:'app-recipe-details',
    templateUrl:'./recipe-details.component.html',
    styleUrls:['./recipe-details.component.scss']

})
export class RecipeDetailsComponent{

    title='saishree'

    @Input() recipeToAdd: Recipe;

    

}