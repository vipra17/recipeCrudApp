import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../service/recipe.service';
import { Router } from '@angular/router';

import { RecipeListComponent } from '../list-recipes/list-recipes.component';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private router: Router, private recipeService: RecipeService, private listComponent: RecipeListComponent) { }

  ngOnInit() {
  }

  deleteRecipe(id) {
    this.recipeService.deleteRecipe(this.recipe.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
