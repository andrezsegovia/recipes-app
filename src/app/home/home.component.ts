import { Component, OnInit } from '@angular/core';
import { Recipe } from '../domain/recipe';
import { RecipeService } from '../shared/services/recipe.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe( data => {
      console.log(data);
      this.recipes = data;
    });
  }
}
