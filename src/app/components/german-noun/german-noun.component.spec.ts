import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanNounComponent } from './german-noun.component';

describe('GermanNounComponent', () => {
  let component: GermanNounComponent;
  let fixture: ComponentFixture<GermanNounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanNounComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanNounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
