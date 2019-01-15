import { Component, OnInit } from '@angular/core';
import { Recipe } from '../domain/recipe';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styles: []
})
export class RecepiesComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe( data => {
        this.recipes = data;
    });
  }

}
