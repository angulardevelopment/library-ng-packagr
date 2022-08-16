import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCodeComponent } from './format-code.component';

describe('FormatCodeComponent', () => {
  let component: FormatCodeComponent;
  let fixture: ComponentFixture<FormatCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
