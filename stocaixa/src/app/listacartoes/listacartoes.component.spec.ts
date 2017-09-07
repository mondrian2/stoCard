import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacartoesComponent } from './listacartoes.component';

describe('ListacartoesComponent', () => {
  let component: ListacartoesComponent;
  let fixture: ComponentFixture<ListacartoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacartoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
