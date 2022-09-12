import { createViewChild } from '@angular/compiler/src/core';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('amountInput', { static: true }) amount:ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  
  addItem(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log(this.amount);

    const ingredient= new Ingredient(nameInput.value,this.amount.nativeElement.value)
    this.ingredientAdded.emit(ingredient);
  }
  ngOnInit(): void {
  }

}
