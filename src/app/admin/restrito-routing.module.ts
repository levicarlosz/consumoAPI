import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { RestritoComponent } from './restrito.component';
import { GuardGuard } from '../guard.guard';
import { ProductsListComponent } from './products-list/products-list.component';

const restritoRoutes: Routes = [
    {
        path: 'admin', component: RestritoComponent, children: [
            { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard] },
            { path: 'lista', component: ProductsListComponent, canActivate: [GuardGuard] },
            { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard] }
        ]
    },

    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule {
}
