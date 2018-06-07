import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/internal/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {Hero, HeroService} from './hero.service';

@Component({
  selector: 'app-hero-list',
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
          [class.selected]="hero.id === selectedId">
        <a [routerLink]="['/hero', hero.id]">
          <span class="badge">{{ hero.id }}</span>{{ hero.name }}
        </a>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  public selectedId: number;
  
  constructor(private service: HeroService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );
  }


}
