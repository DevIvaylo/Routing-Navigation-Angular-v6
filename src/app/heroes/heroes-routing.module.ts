// modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// components
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

const heroesRoutes: Routes = [
  {path: 'heroes', redirectTo: '/superheroes'},
  {path: 'hero/:id', redirectTo: '/superhero/:id'},
  {path: 'superheroes', component: HeroListComponent},
  {path: 'superhero/:id', component: HeroDetailComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
