import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Component({
    selector:'app-shopping',
    templateUrl:'./shopping.component.html',
    styleUrls: ['./shopping.component.scss'],
  
})
export class ShoppingComponent implements OnInit{

    ingredients: Ingredient[];
    
    constructor( private shoppingservice:ShoppingService) {
     
    }


    ngOnInit(): void {
        this.ingredients = this.shoppingservice.getIngredients();
        this.shoppingservice.ingredientsChanged.subscribe((data:Ingredient[])=>this.ingredients=data)
    }

    onAddingNewIngredient(item: Ingredient) {
        this.shoppingservice.onAddingNewIngredient(item);
    }

}