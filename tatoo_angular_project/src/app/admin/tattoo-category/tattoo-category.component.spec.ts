import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooCategoryComponent } from './tattoo-category.component';

describe('TattooCategoryComponent', () => {
  let component: TattooCategoryComponent;
  let fixture: ComponentFixture<TattooCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattooCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattooCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
