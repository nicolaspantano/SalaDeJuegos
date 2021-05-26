import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemotestchatComponent } from './memotestchat.component';

describe('MemotestchatComponent', () => {
  let component: MemotestchatComponent;
  let fixture: ComponentFixture<MemotestchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemotestchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemotestchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
