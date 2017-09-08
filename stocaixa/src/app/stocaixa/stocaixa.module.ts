import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StocaixaComponent } from './stocaixa.component';
import { PrintComponent } from './print/print.component';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Sto.Antonio',
      urls: [{title: 'sto', url: '/'},{title: 'Sto.Card'},{title: 'Caixa'}]
    },
    component: StocaixaComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule, 
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [StocaixaComponent, PrintComponent]
})
export class StocaixaModule { }

