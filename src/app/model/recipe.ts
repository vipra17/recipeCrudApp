import { Ingredients } from "./ingredients";

export class Recipe {
  id: number;
  dishType: string;
  creationDateTime: Date;
  noOfPeople: number;
  ingredientList: Ingredients[];
  cookingSteps: string;
}
