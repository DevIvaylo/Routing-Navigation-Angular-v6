import {Component, ChangeDetectionStrategy} from '@angular/core';
import {LoadingBarService} from '@ngx-loading-bar/core';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styles: [`
    :host {
      padding: 64px 32px;
      display: block;

    }
  `]
})
export class AppComponent {

  constructor(public loader: LoadingBarService) {
  }


}
