import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardLargeComponent } from './app-card-large-component';

describe('AppCardLargeComponent', () => {
  let component: AppCardLargeComponent;
  let fixture: ComponentFixture<AppCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCardLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
