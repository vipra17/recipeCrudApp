import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Observable < Recipe[] > ;


  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
  this.recipes = this.recipeService.getRecipesList();
  }
}
