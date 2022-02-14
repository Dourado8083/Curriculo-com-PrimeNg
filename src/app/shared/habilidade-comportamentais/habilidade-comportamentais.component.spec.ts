import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadeComportamentaisComponent } from './habilidade-comportamentais.component';

describe('HabilidadeComportamentaisComponent', () => {
  let component: HabilidadeComportamentaisComponent;
  let fixture: ComponentFixture<HabilidadeComportamentaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadeComportamentaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadeComportamentaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
