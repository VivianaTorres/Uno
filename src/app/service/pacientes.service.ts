import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPacientes(): Observable<IPaciente[]>{
    return this.http.get<IPaciente[]>('assets/data/7.json') 
  }
}
