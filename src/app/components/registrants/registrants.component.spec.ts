import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantsComponent } from './registrants.component';

describe('RegistrantsComponent', () => {
  let component: RegistrantsComponent;
  let fixture: ComponentFixture<RegistrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
