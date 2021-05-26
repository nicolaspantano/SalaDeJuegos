import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptchatComponent } from './pptchat.component';

describe('PptchatComponent', () => {
  let component: PptchatComponent;
  let fixture: ComponentFixture<PptchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PptchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PptchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
