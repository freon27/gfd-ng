import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {debounceTime, map} from "rxjs/operators";

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<string>();

  formGroup = new FormGroup({
    search: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {
    this.formGroup
      .get('search')?.valueChanges
      .pipe(
        untilDestroyed(this),
        debounceTime(250),
      )
      .subscribe(value => this.search.emit(value));
  }

  ngOnDestroy() {}
}
