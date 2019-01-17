import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/domain/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-recipes-listing',
  templateUrl: './recipes-listing.component.html',
  styles: []
})
export class RecipesListingComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
    private router: Router ) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe( data => {
        this.recipes = data['recipes'];
    });
  }

  edit( recipe: Recipe ) {
    this.router.navigate(['/recipes/edit', recipe.id ]);
  }

  create( ) {
    this.router.navigate(['/recipes/create']);
  }

}
