import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { RecipesListingComponent } from './components/recipes-listing/recipes-listing.component';
import { RecipesEditComponent } from './components/recipes-edit/recipes-edit.component';
import { RecipesCreateComponent } from './components/recipes-create/recipes-create.component';

@NgModule({
  declarations: [
    RecipesListingComponent,
    RecipesEditComponent,
    RecipesCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
