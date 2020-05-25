import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEjercicio } from '../model/ejercicio';
import { HttpClient } from '@angular/common/http';
import { IPaciente } from '../model/paciente';

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

  public getDatos(nombre: string): Observable<IPaciente>{
    return this.http.post<IPaciente>('/assets/data/7.json',{nombre: 'nombre'})

  }
}

