import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04NgifclsComponent } from './myc04-ngifcls.component';

describe('Myc04NgifclsComponent', () => {
  let component: Myc04NgifclsComponent;
  let fixture: ComponentFixture<Myc04NgifclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc04NgifclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc04NgifclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
