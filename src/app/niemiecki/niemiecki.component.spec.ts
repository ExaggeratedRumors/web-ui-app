import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiemieckiComponent } from './niemiecki.component';

describe('NiemieckiComponent', () => {
  let component: NiemieckiComponent;
  let fixture: ComponentFixture<NiemieckiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiemieckiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiemieckiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
