import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';
import { WordsComponent } from './containers/words/words.component';
import {CategoriesComponent} from "./containers/categories/categories.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', component: WordsComponent },
  // { path: '**', redirectTo: 'words' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
