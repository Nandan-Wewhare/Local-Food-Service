import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsadminComponent } from './itemsadmin.component';

describe('ItemsadminComponent', () => {
  let component: ItemsadminComponent;
  let fixture: ComponentFixture<ItemsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
