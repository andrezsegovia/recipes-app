import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/domain/recipe';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Array<Recipe>> {
    return this.http.get<Array<Recipe>>('/assets/recipes.json');
  }
}
