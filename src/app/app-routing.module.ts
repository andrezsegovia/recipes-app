import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesCreateComponent } from './shared/recipes/components/recipes-create/recipes-create.component';
import { RecipesListingComponent } from './shared/recipes/components/recipes-listing/recipes-listing.component';
import { RecipesEditComponent } from './shared/recipes/components/recipes-edit/recipes-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'recepies', component: RecipesListingComponent},
  {path: 'recipes/create', component: RecipesCreateComponent },
  {path: 'recipes/edit/:id', component: RecipesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
