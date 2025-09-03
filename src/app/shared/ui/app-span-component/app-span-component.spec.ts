import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpanComponent } from './app-span-component';

describe('AppSpanComponent', () => {
  let component: AppSpanComponent;
  let fixture: ComponentFixture<AppSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSpanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
