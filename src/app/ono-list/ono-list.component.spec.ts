import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnoListComponent } from './ono-list.component';

describe('OnoListComponent', () => {
  let component: OnoListComponent;
  let fixture: ComponentFixture<OnoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
