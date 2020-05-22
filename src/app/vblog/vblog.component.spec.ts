import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VblogComponent } from './vblog.component';

describe('VblogComponent', () => {
  let component: VblogComponent;
  let fixture: ComponentFixture<VblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
