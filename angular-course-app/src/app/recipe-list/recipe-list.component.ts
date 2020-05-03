import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Paste Recipe', 'Paste description', 'assets/images/pasta.jpg'),
    new Recipe('Mac n Cheese', 'Mac Cheese description', 'assets/images/recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
