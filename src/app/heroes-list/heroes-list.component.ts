import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  template: `
    <h2>Heroes</h2>
    <p>Get your heroes here</p>
    <button routerLink="/sidekick">Go to sidekick </button>
  `,

})
export class HeroesListComponent {

  constructor() {
  }


}
