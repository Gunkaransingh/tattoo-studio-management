import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltattooCategoryComponent } from './alltattoo-category.component';

describe('AlltattooCategoryComponent', () => {
  let component: AlltattooCategoryComponent;
  let fixture: ComponentFixture<AlltattooCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltattooCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltattooCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
