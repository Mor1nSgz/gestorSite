import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../component/popup/popup.component';
import { Item } from 'src/app/component/models/Item';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent {

  titulo:string = '';
  desc:string = '';
  items: Item[] = [];
  aberto = false;
  checado = false;

  constructor(public dialog:MatDialog){}

  flyout() {
    this.aberto = !this.aberto;
  }

  get iconeBtn(){
    return this.aberto ? 'close' : 'add';
  }

  criarProd(){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '60%'
    })

    dialogRef.afterOpened().subscribe(() => {
      const instancia = dialogRef.componentInstance;
      instancia.popups = 'pop1';
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.titulo = result.titulo;
        this.desc = result.desc;
        const receiveImg = result.imagem;

        this.items.push({ nome: this.titulo, descricao: this.desc, img: receiveImg });
      }
    });
  }

  addQuant(){
    if(this.items.length)
    {
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '60%'
      })
  
      dialogRef.afterOpened().subscribe(() => {
        const instancia = dialogRef.componentInstance;
        instancia.popups = 'pop2';
      });
    }
    else
    {
      alert("Cuidado!");
    }
    
  }

  editaProd(){

  }

}
