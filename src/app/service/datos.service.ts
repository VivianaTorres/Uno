import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private currentNumberCommentsSubject: BehaviorSubject<string>;
  public currentNumberComments: Observable<string>;
  private numberComments: string;

  constructor() {
    this.currentNumberCommentsSubject = new BehaviorSubject<string>('');
    this.currentNumberComments = this.currentNumberCommentsSubject.asObservable();
    this.numberComments = '';
  }

  public sendComments(numeroComentarios: string) {
    this.numberComments = numeroComentarios;
    this.currentNumberCommentsSubject.next(numeroComentarios);
  }
}