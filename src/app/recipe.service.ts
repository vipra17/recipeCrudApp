import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrlApi = "https://arcane-tundra-30470.herokuapp.com";

  constructor(private http: HttpClient) {}

  getRecipe(id: number): Observable < Object > {
    return this.http.get(`${this.baseUrlApi}`+`/v1/recipes/${id}`);
  }

  createRecipe(recipe: Object): Observable < Object > {
    return this.http.post(`${this.baseUrlApi}` + `/v1/recipes`, recipe);
  }

  updateRecipe(value: any): Observable < Object > {
    return this.http.put(`${this.baseUrlApi}`+ `/v1/recipes`, value);
  }

  deleteRecipe(id: number): Observable < any > {
    return this.http.delete(`${this.baseUrlApi}`+ `/v1/recipes/${id}`);
  }

  getRecipesList(): Observable < any > {
    return this.http.get(`${this.baseUrlApi}`+ `/v1/recipes`);
  }

  getIngredientsList(): Observable < any > {
    return this.http.get(`${this.baseUrlApi}`+ `/v1/ingredients`);
  }

  deleteAll(): Observable < any > {
    return this.http.delete(`${this.baseUrlApi}` + `/delete`, {
      responseType: 'text'
    });
  }
}
