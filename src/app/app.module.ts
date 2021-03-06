// modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HeroesModule} from './heroes/heroes.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// components
import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {PageNotFoundComponent} from './page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    // Notice that the AppRoutingModule is last. Most importantly, it comes after the HeroesModule.
    // The order of route configuration matters. The router accepts the first route that matches a navigation request path.
    BrowserModule,
    FormsModule,
    HeroesModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
