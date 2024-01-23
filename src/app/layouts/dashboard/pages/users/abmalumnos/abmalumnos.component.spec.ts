import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmalumnosComponent } from './abmalumnos.component';

describe('AbmalumnosComponent', () => {
  let component: AbmalumnosComponent;
  let fixture: ComponentFixture<AbmalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbmalumnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbmalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
