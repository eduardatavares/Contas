import { ContasService } from './services/contas.service';
import { Conta } from './contas/model/conta';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  conta: Conta = new Conta();
  contas: Conta[] = [];
  filtro: any;

  constructor(private contasService: ContasService) {
    this.filtro = {
      status: -1
    };
  }

  ngOnInit(): void {
    this.getContas();

  }

  public salvar() {
    console.log(this.conta);
    this.contasService.post(this.conta).subscribe(
      conta => {
        console.log(conta);
        this.getContas();
        this.conta = new Conta();
      }
    );
  }

  getContas(): void {
    this.contasService.getContas(this.filtro).subscribe(contas => {
      this.contas = contas;
    });
  }

  alterar(conta: Conta) {
    $('#myModal').modal('show');
    this.conta = conta;
  }
  pagar(conta: Conta) {
    this.conta = conta;
    this.conta.status = true;
    this.salvar();
  }

  deletar(id: number) {
    this.contasService.delete(id).subscribe(conta => {
      this.getContas();
    });
  }


}
