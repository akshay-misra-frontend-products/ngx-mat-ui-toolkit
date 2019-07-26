import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatUiToolkitComponent } from './ngx-mat-ui-toolkit.component';

describe('NgxMatUiToolkitComponent', () => {
  let component: NgxMatUiToolkitComponent;
  let fixture: ComponentFixture<NgxMatUiToolkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatUiToolkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatUiToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
