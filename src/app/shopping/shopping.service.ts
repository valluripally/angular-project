import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingService{

  private  ingredients: Ingredient[] = [new Ingredient("apples", 5), new Ingredient("tomatos", 10)];

    
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    getIngredients() {
    return  this.ingredients.slice();
    }


    onAddingNewIngredient(item: Ingredient) {
        this.ingredients.push(item);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


    addMultipleIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


    
}