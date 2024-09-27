import { Component,} from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  public products: Produto[] = [];

  constructor(private _produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto) => {
      this.products = retornaProduto.map((item) => {
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
}
