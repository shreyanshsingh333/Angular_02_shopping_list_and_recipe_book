import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
      'This is simply a test.',
      'https://c.pxhere.com/photos/8b/0f/food_meat_' +
      'recipe_power_pork_dishes-604134.jpg!s'),
    new Recipe('A Test Recipe 2',
      'This is simply a test.',
      'https://c.pxhere.com/photos/8b/0f/food_meat_' +
      'recipe_power_pork_dishes-604134.jpg!s'),
    new Recipe('A Test Recipe 3',
      'This is simply a test.',
      'https://c.pxhere.com/photos/8b/0f/food_meat_' +
      'recipe_power_pork_dishes-604134.jpg!s')
  ];
  constructor() { }

  ngOnInit() {
  }

}
