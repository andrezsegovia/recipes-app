import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/domain/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipes-listing',
  templateUrl: './recipes-listing.component.html',
  styles: []
})
export class RecipesListingComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe( data => {
        this.recipes = data;
    });
  }

}
