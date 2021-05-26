import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatetichatComponent } from './tatetichat.component';

describe('TatetichatComponent', () => {
  let component: TatetichatComponent;
  let fixture: ComponentFixture<TatetichatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatetichatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TatetichatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
