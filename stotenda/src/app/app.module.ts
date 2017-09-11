

import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './shared/right-sidebar/rightsidebar.component';
import { AppComponent } from './app.component';
import { PedidosComponent } from './tendas/pedidos/pedidos.component';
import { ProdutosComponent } from './tendas/produtos/produtos.component';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './pages/starter/starter.module#StarterModule' 
  },{ 
    path: 'pedidos',
    component: PedidosComponent
  },{ 
    path: 'produtos',
    component: ProdutosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    RightSidebarComponent,
    PedidosComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent, PedidosComponent, ProdutosComponent]
})
export class AppModule { }
