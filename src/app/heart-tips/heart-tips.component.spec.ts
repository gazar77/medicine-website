import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartTipsComponent } from './heart-tips.component';

describe('HeartTipsComponent', () => {
  let component: HeartTipsComponent;
  let fixture: ComponentFixture<HeartTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeartTipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
