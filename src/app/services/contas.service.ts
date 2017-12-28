import { Conta } from './../contas/model/conta';
import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContasService  extends AbstractHttpService<Conta>{

  constructor(http : Http) {
    super("conta",http);
   }

getContas(filtro: any) : Observable<Conta[]>{
  return this.queryAll(filtro);
}


}
