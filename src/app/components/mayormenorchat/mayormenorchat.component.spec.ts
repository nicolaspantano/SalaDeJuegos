import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayormenorchatComponent } from './mayormenorchat.component';

describe('MayormenorchatComponent', () => {
  let component: MayormenorchatComponent;
  let fixture: ComponentFixture<MayormenorchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayormenorchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayormenorchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
