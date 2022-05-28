import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpawanieComponent } from './spawanie.component';

describe('SpawanieComponent', () => {
  let component: SpawanieComponent;
  let fixture: ComponentFixture<SpawanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpawanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpawanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
