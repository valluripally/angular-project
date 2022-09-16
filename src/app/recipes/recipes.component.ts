import { Component, OnInit, Output } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
    providers:[RecipeService]
})
export class RecipesComponent implements OnInit{



    constructor(private recipeService: RecipeService) {
    
    }
    
    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe((data: Recipe) =>
            this.selectedItem = data);
    }

    selectedItem: Recipe;
   


}