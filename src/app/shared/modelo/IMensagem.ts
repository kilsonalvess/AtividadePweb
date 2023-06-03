export abstract class IMensagem {
  abstract info(mensagem: string): void;
  abstract sucesso(mensagem: string): void;
  abstract erro(mensagem: string): void;
  abstract alert(mensagem: string): void;
}
