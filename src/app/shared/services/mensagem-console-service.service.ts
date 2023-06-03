import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleServiceService extends IMensagem{

  constructor() {
    super()
   }
  info(mensagem: string): void {
    console.log(mensagem)
  }
  sucesso(mensagem: string): void {
    console.log(mensagem)
  }
  erro(mensagem: string): void {
    console.log(mensagem)
  }
  alert(mensagem: string): void {
    console.log(mensagem)
  }
}
