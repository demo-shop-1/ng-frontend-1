import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardSmallComponent } from './app-card-small-component';

describe('AppCardSmallComponent', () => {
  let component: AppCardSmallComponent;
  let fixture: ComponentFixture<AppCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCardSmallComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
