import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebuaryComponent } from './febuary.component';

describe('FebuaryComponent', () => {
  let component: FebuaryComponent;
  let fixture: ComponentFixture<FebuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebuaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FebuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
