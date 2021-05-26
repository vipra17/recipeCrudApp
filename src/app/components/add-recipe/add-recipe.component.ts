import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../model/recipe';
import { Ingredients } from "../../model/ingredients";
import { RecipeService } from '../../service/recipe.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();
  ingredientList: Observable<Ingredients[]>;

  submitted = false;

  dropdownList = [];
  dropdownSettings = {};

  form: FormGroup;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.recipeService.getIngredientsList()
    .subscribe(ingredientList => {
      console.log(ingredientList);
      this.dropdownList = ingredientList;
    });
    this.initForm();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      enableCheckAll: false,
      itemsShowLimit: 20,
      allowSearchFilter: true,
      searchPlaceholderText: 'Search for...'
    };
  }

  initForm() {
      this.form = this.formBuilder.group({
        noOfPeople: [null, [Validators.required, Validators.minLength(1)]],
        dishType: [null, [Validators.required, Validators.minLength(1)]],
        ingredientList: [null, [Validators.required]],
        cookingSteps: [null,  [Validators.required, Validators.minLength(1)]]
      });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();
  }

  onSubmit() {
    this.recipeService.createRecipe(this.recipe)
      .subscribe(data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error));
      this.recipe = new Recipe();
  }
}
