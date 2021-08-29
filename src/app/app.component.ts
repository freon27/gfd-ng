import { Component } from '@angular/core';
import {WordsFacadeService} from "./services/words-facade.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gfd-ng';

  constructor(private facade: WordsFacadeService) {
  }

  onSearch(text: string) {
    this.facade.searchUpdated(text);
  }
}
