import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './containers/about/about.component';
import { WordsComponent } from './containers/words/words.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GermanVerbComponent } from './components/german-verb/german-verb.component';
import { GermanNounComponent } from './components/german-noun/german-noun.component';
import { CardComponent } from './components/card/card.component';
import { CategoriesComponent } from './containers/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WordsComponent,
    GermanVerbComponent,
    GermanNounComponent,
    CardComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
