import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PedidosComponent, ProdutosComponent]
})
export class TendasModule { }
