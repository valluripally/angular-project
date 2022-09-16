import { createViewChild } from '@angular/compiler/src/core';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('amountInput', { static: true }) amount:ElementRef;


  constructor(private shoppingservice: ShoppingService) {

  }

  
  addItem(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log(this.amount);

    const ingredient = new Ingredient(nameInput.value, this.amount.nativeElement.value)
    this.shoppingservice.onAddingNewIngredient(ingredient);
      }
  ngOnInit(): void {
  }

}
