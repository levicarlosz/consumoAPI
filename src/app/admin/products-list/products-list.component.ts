import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        return new Produto(
          item.id,
          item.name,
          item.description,
          item.foto,
          item.price
        );
      });
    });
  }

  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe(
      (name) => {
        this.listarProdutos();
      },
      (err) => {
        alert('Erro ao Excluir');
      }
    );

    this._router.navigate(['/restrito/lista']);
  }
}
