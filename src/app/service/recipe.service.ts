import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrlApi = "https://arcane-tundra-30470.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) {}

  getRecipe(id: number): Observable <any> {
    return this.httpClient.get(`${baseUrlApi}/v1/recipes/${id}`);
  }

  createRecipe(recipe: Object): Observable <any> {
    return this.httpClient.post(`${baseUrlApi}/v1/recipes`, recipe);
  }

  deleteRecipe(id: number): Observable <any> {
    return this.httpClient.delete(`${baseUrlApi}/v1/recipes/${id}`);
  }

  getRecipesList(): Observable <any> {
    return this.httpClient.get(`${baseUrlApi}/v1/recipes`);
  }

  getIngredientsList(): Observable <any> {
    return this.httpClient.get(`${baseUrlApi}/v1/ingredients`);
  }

}
