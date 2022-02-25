import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapIntroComponent } from './bootstrap-intro.component';

describe('BootstrapIntroComponent', () => {
  let component: BootstrapIntroComponent;
  let fixture: ComponentFixture<BootstrapIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
