import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredients } from "../../model/ingredients";
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class IngredientsListComponent implements OnInit {

  ingredients: Observable<Ingredients[]>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.ingredients = this.recipeService.getIngredientsList();
  }
}
