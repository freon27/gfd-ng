import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanVerbComponent } from './german-verb.component';

describe('GermanVerbComponent', () => {
  let component: GermanVerbComponent;
  let fixture: ComponentFixture<GermanVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanVerbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
