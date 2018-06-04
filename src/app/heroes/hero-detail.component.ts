import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {HeroService, Hero} from './hero.service';
import {Observable} from 'rxjs';
import {slideInDownAnimation} from '../animations';

@Component({
  selector: 'app-hero-detail',
  template: `
    <h2>Hero Detail</h2>
    <div *ngIf="hero$ | async as hero">
      <h3>"{{hero.name}}"</h3>
      <div>
        <label>Id: </label>{{ hero.id }}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
      <p>
        <button (click)="goToHeroes()">Back</button>
      </p>
    </div>
  `,
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>;

// As usual, writing a constructor that asks Angular to injecting services that the component requires and reference them
// as private variables.
  constructor(private service: HeroService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get('id')))
    );
  }

  goToHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', {id: heroId}]);
  }


}
