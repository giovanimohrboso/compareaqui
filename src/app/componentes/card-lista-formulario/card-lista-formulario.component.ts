import { Component, OnInit } from '@angular/core';
import { Item } from '../../modelos/item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-lista-formulario',
  templateUrl: './card-lista-formulario.component.html',
  styleUrls: ['./card-lista-formulario.component.css']
})
export class CardListaFormularioComponent {

  novoItem: Item = { codigo: '', descricao: '' };
  listaItens: Item[] = [];

  adicionarItem() {
    this.listaItens.push({ ...this.novoItem });

    this.novoItem.codigo = '';
    this.novoItem.descricao = '';
  }

}
