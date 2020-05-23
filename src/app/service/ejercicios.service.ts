import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEjercicio } from '../model/ejercicio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllEjercicios(): Observable<IEjercicio[]>{
    return this.http.get<IEjercicio[]>('/assets/data/ejercicios.json');
  }
}
