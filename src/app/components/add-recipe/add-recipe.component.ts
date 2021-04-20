import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipe';
import { Ingredients } from "../../ingredients";
import { RecipeService } from '../../recipe.service';
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
  selectedItems = [];
  dropdownSettings = {};
  recipeId: any;

  form: FormGroup;

constructor(private route: ActivatedRoute, private recipeService: RecipeService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });
      console.log(this.recipeId);

    if(this.recipeId){
      this.recipeService.getRecipe(this.recipeId)
      .subscribe(recipeData => {
        this.recipe.id = this.recipeId;
        this.recipe.cookingSteps = recipeData['cookingSteps'];
        this.recipe.creationDateTime = recipeData['creationDateTime'];
        this.recipe.dishType = recipeData['dishType'];
        this.recipe.ingredientList = recipeData['ingredientList'];
        this.recipe.noOfPeople = recipeData['noOfPeople'];
      });
    }
    else{
      this.recipe = new Recipe();
      this.recipeService.getIngredientsList()
      .subscribe(ingredientList => {
        console.log(ingredientList);
        this.dropdownList = ingredientList;
      });
    }

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      enableCheckAll: false,
      selectAllText: 'Select all',
      unSelectAllText: 'Deselect all',
      itemsShowLimit: 20,
      allowSearchFilter: true,
      searchPlaceholderText: 'Search for...',
    };

    this.form = this.formBuilder.group({
      noOfPeople: [null, [Validators.required, Validators.minLength(1)]],
      dishType: [null, [Validators.required, Validators.minLength(1)]],
      ingredientList: [null, [Validators.required]],
      cookingSteps: [null,  [Validators.required, Validators.minLength(1)]],
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
  save() {
      this.recipeService.createRecipe(this.recipe)
      .subscribe(data => console.log(data), error => console.log(error));
      this.recipe = new Recipe();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
