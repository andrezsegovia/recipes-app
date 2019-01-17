import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from 'src/app/domain/recipe';
import { switchMap } from 'rxjs/operators';
import { RecipeService } from 'src/app/shared/services/recipe.service';
@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styles: []
})
export class RecipesEditComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) {
      this.recipeService.getById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe( recipe => this.recipe = recipe);
    }

  ngOnInit() {
  }
}
