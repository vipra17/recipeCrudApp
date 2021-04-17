import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../../recipe.service';
import { Ingredients } from '../../ingredients';

@Component({
  selector: 'list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class IngredientsListComponent implements OnInit {

  ingredients: Observable<Ingredients[]>;
  showMenu: any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.ingredients = this.recipeService.getIngredientsList();
  }
}
