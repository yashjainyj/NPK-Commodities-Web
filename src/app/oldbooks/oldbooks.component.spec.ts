import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldbooksComponent } from './oldbooks.component';

describe('OldbooksComponent', () => {
  let component: OldbooksComponent;
  let fixture: ComponentFixture<OldbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
