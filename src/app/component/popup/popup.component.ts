import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],

})
export class PopupComponent {
  // https://www.youtube.com/watch?v=zUp3Unc-ynM

  public popups: string = '';
  constructor(private ref: MatDialogRef<PopupComponent>){}
  
  quant: number = 0;
  busc: any;

  formu = new FormGroup({
    campoTit: new FormControl(''),
    campoDesc: new FormControl('')
  });

  enviar(){
    const dadoTit = this.formu.get('campoTit')?.value as string;
    const dadoDesc = this.formu.get('campoDesc')?.value as string;

    this.ref.close({titulo: dadoTit, desc: dadoDesc, imagem: this.busc});
  }


  pegarImg(event: any){
    if(event.target.files){
      const arq = event.target.files[0];
      const read = new FileReader();

      read.onload = e => { this.busc = read.result; };
      read.readAsDataURL(arq);
    }
  } 

  aumentQnt(){
    
  }

}
