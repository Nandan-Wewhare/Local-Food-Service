import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyaccessComponent } from './denyaccess.component';

describe('DenyaccessComponent', () => {
  let component: DenyaccessComponent;
  let fixture: ComponentFixture<DenyaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenyaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
