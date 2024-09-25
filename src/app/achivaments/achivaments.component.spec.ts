import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivamentsComponent } from './achivaments.component';

describe('AchivamentsComponent', () => {
  let component: AchivamentsComponent;
  let fixture: ComponentFixture<AchivamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
