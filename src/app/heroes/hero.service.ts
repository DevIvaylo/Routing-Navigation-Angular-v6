import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/internal/operators';

export class Hero {
  constructor(public id: number, public name: string) {
  }
}

const HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Mr. Ivaylo'),
  new Hero(13, 'Mr. Dim'),
  new Hero(14, 'Mr. Anthony'),
  new Hero(15, 'Mr. Narco'),
  new Hero(16, 'Mr. Bombasto'),
];


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() {
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map(heroes => heroes.find(hero => hero.id === +id))
    );
  }

}
