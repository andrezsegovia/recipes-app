import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/domain/recipe';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Array<Recipe>> {
    return this.http.get<Array<Recipe>>('/assets/recipes.json');
  }

  getById( id: Number ): Observable<Recipe> {
    return this.http.get<Array<Recipe>>('/assets/recipes.json').pipe(
        map( res => {
          let recipe: Recipe;
          res['recipes'].forEach(element => {
            if ( element['id'] === id) {
              recipe = {
                id: element['id'],
                name: element['name'],
                nextDay: element['nextDay'],
                lastDay: element['lastDay'],
                time: element['time']
              };
            }
          });
          return recipe;
        }));
    }
}
