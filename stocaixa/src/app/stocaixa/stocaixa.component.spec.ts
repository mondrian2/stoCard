import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocaixaComponent } from './stocaixa.component';

describe('StocaixaComponent', () => {
  let component: StocaixaComponent;
  let fixture: ComponentFixture<StocaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
