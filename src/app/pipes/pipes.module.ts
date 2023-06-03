import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { TelefonePipe } from './pipe/telefone.pipe';



@NgModule({
  declarations: [CpfPipe, TelefonePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    TelefonePipe
  ]
})
export class PipesModule { }
