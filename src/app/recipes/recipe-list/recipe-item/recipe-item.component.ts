import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipe2= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  selectIntoDetail()
  {
    this.recipe2.emit(this.recipe);
  }

}
