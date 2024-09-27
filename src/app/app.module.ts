import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Importações Angular Material*/
import { AppRoutingModule } from './app-routing.module';
import { RestritoRoutingModule } from './admin/restrito-routing.module';
import { AppComponent } from './app.component';

import { RestritoComponent } from './admin/restrito.component';
import { AtualizaProdutoComponent } from './admin/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './admin/cadastro-produto/cadastro-produto.component';
import { MenuRestritoComponent } from './admin/menu-restrito/menu-restrito.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestritoComponent,
    AtualizaProdutoComponent,
    CadastroProdutoComponent,
    MenuRestritoComponent,
    ProductsListComponent,
    HeaderComponent,
    HomePageComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RestritoRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
