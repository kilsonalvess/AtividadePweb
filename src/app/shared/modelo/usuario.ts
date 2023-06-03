export class Usuario {

  constructor(public nome = '',
              public idade?: number,
              public cpf: string = '',
              public id?: number,
              public telefone: string= '') {
  }
}
